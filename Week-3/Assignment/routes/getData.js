var express = require('express');
var router = express.Router();


function sum(parameter){
  var sum = (parameter+1)*parameter/2;
  return sum;
}

router.get('/',function(req, res, next){
 
  const{number}=req.query;
  var interger= parseInt(number);

  if (number==null) { 
    res.send("Lack of Parameter");}
    else{
    if(isNaN(interger)){
      res.render('index',{
        title:'wrong number'
    });}
    else{
    var result=sum(interger);
    res.render('index',{
      title:'Result:'+    result
    });}
  }
  });   
  
  
       
module.exports = router;
