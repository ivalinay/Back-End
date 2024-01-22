const router = require("express").Router();
const userService = require('../services/userService')

router.post('/register',async (req,res)=>{
    const { email, password } = req.body;

    await userService.register({ email, password})
    res.send('Ok')
})

module.exports = router;
