const path = require("path");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.configDotenv();
router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(__dirname) + "/views/auth.html"));
});
router.post("/", (req, res) => {
  let credentials = {
    email: req.body.inpmail,
    pass: req.body.inppass,
  };
  authenticateUser(credentials).then((code) => {
    if (code == 200) {
      res.redirect("/shop");
    } else {
      res.redirect("/");
    }
  });
});

const authenticateUser = async (credentials) => {
  if (
    credentials.email == process.env.LOGIN_EMAIL &&
    credentials.pass == process.env.LOGIN_PASS
  ) {
    return 200;
  } else {
    return 404;
  }
};

module.exports = router;
