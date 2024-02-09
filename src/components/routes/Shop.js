const express = require("express");
const path = require("path");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  if (
    req.query.auth &&
    jwt.verify(req.query.token, process.env.ACCESS_TOKEN_JWT)
  ) {
    return res.sendFile(
      path.resolve(path.dirname(__dirname) + "/views/shop.html")
    );
  }
  return res.redirect("/error");
});

module.exports = router;
