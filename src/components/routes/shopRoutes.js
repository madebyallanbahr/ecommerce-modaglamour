const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.query.auth && req.query.token == "123") {
    return res.json({
      message: "Shop is under construction.",
    });
  }
  return res.redirect("/error");
});

module.exports = router;
