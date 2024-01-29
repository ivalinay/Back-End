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

router.post("/", async (req, res) => {
  try {
    console.log(req.user);
    const { description, img, make, material, model, price, year } = req.body;
    await furnitureService.create({
      description,
      img,
      make,
      material,
      model,
      price,
      year,
      _ownerId: req.user._id,
    });

    res.status(201).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

// Get-> Read
// DELETE -> Delete
// POST -> Create
// PUT, Patch -> Update

router.get("/:furnitureId", async (req, res) => {
  try {
    const { furnitureId } = req.params;
    const furniture = await furnitureService.getOne(furnitureId);
    res.json(furniture);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.put("/:furnitureId", async (req, res) => {
  try {
    const { furnitureId } = req.params;
    const { description, img, make, material, model, price, year } = req.body;
    const furnitureData = {
      description,
      img,
      make,
      material,
      model,
      price,
      year,
      _ownerId: req.user._id,
    };

    await furnitureService.update(furnitureId, furnitureData);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.delete("/:furnitureId", async (req, res) => {
  try {
    const { furnitureId } = req.body;
    await furnitureData.delete(furnitureId);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});
module.exports = router;
