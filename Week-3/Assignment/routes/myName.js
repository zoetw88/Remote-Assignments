var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');

var list={};
router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))

router.get('/', (req,res)=> {
  if(req.cookies.username){
  res.render('name',{name:req.cookies.username});
 
  }else{
    res.redirect('/trackName');
  }
});

router.post('/', (req,res)=> {
  res.cookie('username',req.body.username);
  res.render('name',{name:req.body.username});
  
});

module.exports = router;
