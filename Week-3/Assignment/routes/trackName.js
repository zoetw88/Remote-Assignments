var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var list=[];
router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))


  

  router.post('/', (req,res)=> {
    res.cookie('username',req.body.username);
    res.redirect('/myName');
  });
  
  
router.get('/',(req,res)=>{
    res.render('trackname');    
});

module.exports = router;
