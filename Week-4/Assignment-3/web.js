const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const app = express();
const bcrypt = require('bcrypt');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './view');
app.listen('3000',()=>{
    console.log("Server started successfully on port 3000!")
})


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'admin',
    database: 'assignment'
   
});

db.connect((err) => {
    if(err)throw err;
    console.log('MySql Connected!');
});

app.get('/createdb',(req,res)=> {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created!');
    });
})

app.get('/createtable',(req,res)=>{
    let sql = 'CREATE TABLE user(ID int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (ID))';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('User Table created!');
    })
})

//--註冊/登入
app.get('/member', (req, res) => {
if (req.query.hemail && req.query.hpass){
    db.query('SELECT * From user WHERE email =? AND password=?', [[req.query.hemail],[req.query.hpass]],(err,result)=>{
        if(err) throw err;
         if(result.length > 0){
                res.render('member',{name: req.query.hemail,result:'登入成功'});
            }
         else{
               res.render('index',{mistake:'重新註冊'});
        }
    })
}
else if (req.query.email && req.query.pass){
    db.query('SELECT * FROM user WHERE email=? AND password=?', [[req.query.email],[req.query.pass]],(err,result)=>{
        if(err) throw err;
         if(result.length===0){
            var post = [[req.query.email,req.query.pass]];
             db.query('INSERT INTO user(email,password) VALUES?',[post],(err,result)=>{
                if(err) throw err;
                res.render('member',{name: req.query.email,result:'註冊成功'});
             })
            }
         else{          
           res.render('member',{name: req.query.email,result:'已經有帳號密碼'});
        }
    })
   } 
else if (!req.query.email||!req.query.pass){
    res.render('member',{result: '少輸入帳號或密碼'});
  }

})



app.get('/home', (req,res) => {
    res.render('index');
})