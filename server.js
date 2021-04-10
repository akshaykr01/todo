const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const bodyparaser = require('body-parser');
const bodyParser = require('body-parser');
const path = require('path');
const connectdb = require('./server/database/connection');


dotenv.config({path:'config.env'});

const port = process.env.PORT || 8080;

//using morgan  

app.use(morgan('tiny'));

connectdb();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

//loading assets

app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));

//load router

app.use('/',require('./server/routes/router'));




app.listen(port,function(){
    console.log(`connected with ${port}`);
})