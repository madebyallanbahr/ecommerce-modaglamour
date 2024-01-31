const express = require("express");
const cartRoutes = require("../routes/cartRoutes");
const productsRoutes = require("../routes/productsRoutes");
const authRoutes = require("../routes/authRoutes");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/auth");
});

router.use("/auth", authRoutes);

router.use("/shop", productsRoutes);

router.use("/cart", cartRoutes);

module.exports = router;
