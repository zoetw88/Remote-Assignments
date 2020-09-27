var express = require('express');
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(cookieParser());
router.use(express.static('public'))





router.use(express.static('public'))

router.get('/', (req,res)=> {
 
if (!req.cookies.username){
  console.log(req.cookies.value);
  res.render('trackname');
  
}

else {
    res.render('name',{name:req.cookies.username});
  
  }

  

});

module.exports = router;