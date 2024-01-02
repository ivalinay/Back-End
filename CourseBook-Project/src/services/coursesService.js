const Course = require("./../models/Course");

exports.create = (createData) => Course.create(createData);

exports.getAll = () => Course.find();

exports.getLastThree = () => Course.find().sort({ _id: -1 }).limit(3);

exports.getSingleCourse = (courseId) => Course.findById(courseId).populate("signUpList");

exports.update = (courseId, createData) => Course.findByIdAndUpdate(courseId, createData);

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.getMyCourses = (ownerId) => Course.find({ owner: ownerId }).populate("owner");
exports.getSignedCourses = (ownerId) => Course.find({ "signUpList._id": ownerId }).populate("owner");

exports.addSignUpsToCourse = async (courseId, userId) => {
  const course = await this.getSingleCourse(courseId);
  const isExtistingSignUp = course.signUpList.some((v) => v?.toString() === userId);

  if (isExtistingSignUp) {
    return;
  }

  course.signUpList.push(userId);
  return course.save();
};
