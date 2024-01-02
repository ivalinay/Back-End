const router = require("express").Router();
const coursesService = require("../services/coursesService");

router.get("/", async (req, res) => {
  const courses = await coursesService.getLastThree().lean();
  res.render("home", { courses });
});
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
