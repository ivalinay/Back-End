const router = require("express").Router();
const furnitureService = require('../services/furnitureService')

router.get('/', async (req,res)=>{
const furnitures = await furnitureService.getAll()
res.json(furnitures)
})

module.exports = router;
