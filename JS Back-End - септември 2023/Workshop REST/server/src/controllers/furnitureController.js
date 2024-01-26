const router = require("express").Router();
const furnitureService = require("../services/furnitureService");

router.get("/", async (req, res) => {
  try {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});
a