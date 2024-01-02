const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    minLength: 3,
  },
  certificate: {
    type: String,
    required: true,
    minLength: 2,
  },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid image link!"],
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  price: {
    type: Number,
    required: true,
    minLength: 3,
    validate: {
      validator: function (v) {
        return v > 0;
      },
      message: (props) => `${props.value} is not a positive number!`,
    },
  },
  signUpList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
