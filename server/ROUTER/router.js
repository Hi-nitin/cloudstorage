const express=require('express');
const router=express.Router();
const signup_B=require('../BUSINESS/signup')
const signup_V=require('../VALIDATOR/signup')
const signup_M=require('../MIDDLEWARE/signup')
const login_B=require('../BUSINESS/login')
const login_V=require('../VALIDATOR/login')
const login_M=require('../MIDDLEWARE/login')
const fileupload=require('../BUSINESS/fileupload')
const fileupload_M=require('../MIDDLEWARE/fileupload')

router.post('/signup',signup_V,signup_M,signup_B)
router.post('/login',login_V,login_M,login_B)
router.post('/fileupload', fileupload_M.array('kerafiles', 10),fileupload)

router.get('/', (req, res) => {
  res.send('Hello');
});

module.exports=router;
