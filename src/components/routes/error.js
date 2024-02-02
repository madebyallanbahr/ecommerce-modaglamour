const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(__dirname) + "/views/error.html"));
});

module.exports = router;
