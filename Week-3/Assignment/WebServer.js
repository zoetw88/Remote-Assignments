const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var getDataRouter = require('./routes/getData');
var usersRouter = require('./routes/myName');
var nameRouter = require('./routes/trackName');


const app = express();
app.use('/getData', getDataRouter);
app.use('/myName', usersRouter);
app.use('/trackName', nameRouter);
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('public'))

app.set('view engine','pug');


app.listen(3000);

module.exports = app; 