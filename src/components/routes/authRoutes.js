const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(__dirname) + "/views/auth.html"));
});

module.exports = router;
