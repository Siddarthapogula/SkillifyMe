const express = require("express");
const app = express();
const router = express.Router();

router.post("/create", (req, res)=>{
    res.send("hey from folio create");
})
router.put("/update", (req, res)=>{
    res.send("hey from folio update");
})
router.post("/delete", (req, res)=>{
    res.send("hey from folio delete");
})

module.exports = router;