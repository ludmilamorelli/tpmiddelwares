var express =require('express');
var router= express.Router();

const {index,login,register, admin}=require('../controllers/mainController');
const adminMw = require('../middleware/adminLogMw');

router.get('/',index);
router.get('/login',login);
router.get('/register',register);

router.get('/admin/:adminis',adminMw,admin);

module.exports=router