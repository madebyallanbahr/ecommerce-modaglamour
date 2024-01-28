const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .json({
      message: "Cart is under construction.",
    })
    .statusCode(500);
});

module.exports = router;
