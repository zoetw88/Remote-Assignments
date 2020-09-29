var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))



router.get('/',(req,res)=>{
    res.cookie('username',req.query.username);
    res.redirect('/myName');
});



module.exports = router;
