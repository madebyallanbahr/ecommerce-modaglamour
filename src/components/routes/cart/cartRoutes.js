const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("vendo o carrinho");
});

module.exports = router;
