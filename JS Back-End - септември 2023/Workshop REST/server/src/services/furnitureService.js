const Furniture =  require('../models/Furniture')


exports.getAll = ()=> Furniture.find()