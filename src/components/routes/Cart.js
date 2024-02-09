const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(__dirname) + "/views/cart.html"));
});

module.exports = router;
