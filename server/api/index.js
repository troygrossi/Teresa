const router = require("express").Router();

const staticRoutes = require("./_static_");
const contactRoutes = require('./contact')
// const contactRoutes = require("./contact");


router.use("/api", contactRoutes);

router.use("*", staticRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
