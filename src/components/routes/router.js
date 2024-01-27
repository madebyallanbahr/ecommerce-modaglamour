const express = require("express");
const cartRoutes = require("./cart/cartRoutes");
const productsRoutes = require("./products/productsRoutes");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("home");
});
router.use("/products", productsRoutes);

router.use("/cart", cartRoutes);

module.exports = router;
