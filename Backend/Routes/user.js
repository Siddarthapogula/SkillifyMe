const express = require("express");
const router = express.Router();

router.post("/signup", (req, res)=>{
    res.send("hey from signup")
})
router.post("/signin", (req, res)=>{
    res.send("hey from signin");
})
router.put("/update", (req, res)=>{
    res.send("hey from user update");
})
router.get("/", (req, res)=>{
    res.send("hey from user dash");
})

module.exports = router;