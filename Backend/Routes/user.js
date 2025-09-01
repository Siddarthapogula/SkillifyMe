const express = require("express");
const router = express.Router();
const { User, Folio } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const authenticateUser = require("../MiddleWares/authenticateUser");
const bcrypt = require("bcrypt");
const signUpBody = zod.object({
  username: zod.string(),
  email: zod.string(),
  password: zod.string().min(6),
});

router.post("/signup", async (req, res) => {
  const { success } = signUpBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      result: "false",
      msg: "please enter min 6 char of password / correct inputs",
    });
  }

  const isUserExists = await User.findOne({ email: req.body.email });
  if (isUserExists) {
    return res.status(411).json({
      result: "false",
      msg: "email already exists please try another!",
    });
  }
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({
      msg: "req fields not provided",
    });
  }
  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username: username,
    email: email,
    password: hashed,
  });

  const userId = user._id;
  await Folio.create({
    userId,
    folioCount: 0,
  });

  const token = jwt.sign(
    {
      userId: user._id,
    },
    jwtSecret
  );

  res.json({
    result: "true",
    msg: "success",
    token,
  });
});

const signInBody = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
});

router.post("/signin", async (req, res) => {
  const { success } = signInBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      result: "false",
      msg: "Invalid input format(password must be atleast 6 char)",
    });
  }
  const { username, password } = req.body;
  const user = await User.findOne({
    username: username,
  });
  if (!user) {
    return res.status(404).json({
      result: "false",
      msg: "No user found",
    });
  }
  const hashedPassword = user.password;
  const isCorrect = await bcrypt.compare(password, hashedPassword);
  if(!isCorrect){
    return res.status(400).json({
        msg : "incorrect user password"
    })
  }
  if (user) {
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.json({
      result: "true",
      msg: "successfully logged in",
      token,
    });
    return;
  }
});
const updateBody = zod.object({
  newpassword: zod.string().min(6),
});
router.put("/update", authenticateUser, async (req, res) => {
  const authorization = req.headers.authorization;
  const newPassword = req.body.newpassword;
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      result: "false",
      msg: "enter valid input format",
    });
  }

  const decoded = jwt.verify(authorization, jwtSecret);
  const userId1 = decoded.userId;
  try {
    // Use the correct field in the filter, assuming it's "userId"
    const user = await User.findByIdAndUpdate(userId1, {
      password: newPassword,
    });
    return res.json({
      result: "true ",
      msg: "password updated successfully",
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({
      result: "false",
      msg: "no user found",
    });
  }
});

router.get("/", async (req, res) => {
  const authorization = req.headers.authorization;
  const decoded = jwt.verify(authorization, jwtSecret);
  const userId1 = decoded.userId;
  const user = await User.findOne({ _id: userId1 });
  const userName = user.username;
  res.json({
    userName,
  });
});

module.exports = router;
