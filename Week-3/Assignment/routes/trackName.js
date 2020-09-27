var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var list=[];
router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))


router.get('/',(req,res)=>{
      res.render('trackname');    
      var{username}=req.query;
      list.push(toString(username));
      console.log(list);
  });
  

  

module.exports = router;
