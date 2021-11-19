const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"index work! Don't worry..."});
})

module.exports = router;