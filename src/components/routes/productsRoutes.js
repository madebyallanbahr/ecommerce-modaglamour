const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.query.auth) {
    res.json({
      message: "Shop is under construction.",
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
