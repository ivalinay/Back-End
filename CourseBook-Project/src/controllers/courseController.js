const router = require("express").Router();
const coursesService = require("../services/coursesService");
const userService = require("../services/userService");
const { isAuth } = require("../middlewares/authMiddleware");
const { extractErrorMsgs } = require("../utils/errorHandler");

router.get("/all", async (req, res) => {
  const courses = await coursesService.getAll().lean();
  res.render("course/all-courses", { courses });
});

router.get("/create", isAuth, (req, res) => {
  if (!res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }

  res.render("course/create");
});
router.post("/create", async (req, res) => {
  if (!res.locals.isAuthenticated) {
    res.redirect("/");
    return;
  }
  const { title, type, certificate, image, description, price } = req.body;
  const payload = { title, type, certificate, image, description, price, owner: req.user };

  try {
    await coursesService.create(payload);
    res.redirect("/courses/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("course/create", { errorMessages });
  }
});

router.get("/:courseId/details", async (req, res) => {
  const { courseId } = req.params;

  const course = await coursesService.getSingleCourse(courseId).lean();

  const { user } = req;
  const owner = await userService.getById(course.owner._id).lean();
  const isOwner = user?._id === owner._id.toString();
  const hasSignedUp = course.signUpList?.some((x) => x?._id.toString() === user?._id);
  console.log(course);
  const signedByEmails = course.signUpList.map((x) => x.email).join(", ");

  res.render("course/details", {
    course,
    isOwner,
    owner,
    hasSignedUp,
    signedByEmails,
  });
});

router.get("/:courseId/edit", async (req, res) => {
  const { courseId } = req.params;

  const course = await coursesService.getSingleCourse(courseId).lean();
  const isOwner = res.locals.user?._id === course.owner._id.toString();
  if (!isOwner) {
    res.redirect("/");
    return;
  }

  res.render("course/edit", { course });
});

router.post("/:courseId/edit", async (req, res) => {
  const { courseId } = req.params;

  const course = await coursesService.getSingleCourse(courseId).lean();
  const isOwner = res.locals.user?._id === course.owner._id.toString();
  if (!isOwner) {
    res.redirect("/");
    return;
  }

  const { title, type, certificate, image, price, description } = req.body;
  const payload = {
    title,
    type,
    certificate,
    image,
    price,
    description,
    owner: req.user,
  };
  await coursesService.update(courseId, payload);

  res.redirect(`/courses/${courseId}/details`);
});
router.get("/:courseId/delete", async (req, res) => {
  const { courseId } = req.params;

  await coursesService.delete(courseId);

  res.redirect("/courses/all");
});

router.get("/:courseId/sign-up", async (req, res) => {
  const { courseId } = req.params;
  const { _id } = req.user;

  await coursesService.addSignUpsToCourse(courseId, _id);

  res.redirect(`/courses/${courseId}/details`);
});

module.exports = router;
