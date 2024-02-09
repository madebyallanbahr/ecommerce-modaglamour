const express = require("express");
const cartRoutes = require("./routes/Cart");
const productsRoutes = require("./routes/Shop");
const authRoutes = require("./routes/Auth");
const errorRoutes = require("./routes/Error");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/auth");
});

router.use("/auth", authRoutes);

router.use("/shop", productsRoutes);

router.use("/cart", cartRoutes);

router.use("/error", errorRoutes);
module.exports = router;
