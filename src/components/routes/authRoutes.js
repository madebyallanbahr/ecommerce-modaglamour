const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Authentication is under construction.",
  });
});

module.exports = router;
