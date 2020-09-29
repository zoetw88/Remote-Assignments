var express = require('express');
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))




router.get('/', (req,res)=> {

if (req.cookies.username==='undefined'||!req.cookies.username){
  res.render('trackname');
  console.log(req.cookies.username);
  }
else {
    res.render('name',{name:req.cookies.username});
    console.log('A'+req.cookies.username);
 
  }
});


module.exports = router;