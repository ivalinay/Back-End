const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("./../utils/errorHandler");
const { isAuth } = require("../middlewares/authMiddleware");
const coursesService = require("../services/coursesService");

router.get("/register", (req, res) => {
  if (res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }

  res.render("user/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  try {
    const token = await userService.register({
      username,
      email,
      password,
      repeatPassword,
    });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("user/register", { errorMessages });
  }
});

router.get("/login", (req, res) => {
  if (res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }

  res.render("user/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("user/login", { errorMessages });
  }
});

router.get("/logout", (req, res) => {
  if (!res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }

  res.clearCookie("token");
  res.redirect("/");
});

router.get("/profile", isAuth, async (req, res) => {
  if (!res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }
  const { user } = req;

  const createdCourses = await coursesService.getMyCourses(user?._id).lean();
  const signedCourses = await coursesService.getSignedCourses(user?._id).lean();

  res.render("user/profile", { createdCourses, signedCourses });
});

module.exports = router;
