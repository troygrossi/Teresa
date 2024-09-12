const router = require("express").Router();

const staticRoutes = require("./_static_");
// const calendarRoutes = require("./calendar");


// router.use("/api", calendarRoutes);

router.use("*", staticRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
