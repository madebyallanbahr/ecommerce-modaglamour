const authController = require("../controllers/AuthController");

const path = require("path");
const express = require("express");
const router = express.Router();

router.use(express.json({ bodyParser: true }));

router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(__dirname) + "/views/auth.html"));
});

router.route("/login").post(authController.loginUser);
router.route("/register").post(authController.registerUser);

module.exports = router;
