const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    unique: true,
  },
  species: {
    type: String,
    required: true,
    minLength: 3,
  },
  skinColor: {
    type: String,
    required: true,
    minLength: 3,
  },
  eyeColor: {
    type: String,
    required: true,
    minLength: 3,
  },
  image: {
    type: String,
    required: true,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid creature image link!S"]
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 500,
  },
  votes: [
    {
      type: mongoose.Types.ObjectId,
      res: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    res: "User",
    required: true,
  },
});
const Creature = mongoose.model("Creature", creatureSchema);
module.exports = Creature;
