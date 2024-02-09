const express = require("express");
const cartRoutes = require("./cartRoutes");
const productsRoutes = require("./shopRoutes");
const authRoutes = require("./authRoutes");
const errorRoutes = require("./error");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/auth");
});

router.use("/auth", authRoutes);

router.use("/shop", productsRoutes);

router.use("/cart", cartRoutes);

router.use("/error", errorRoutes);
module.exports = router;
