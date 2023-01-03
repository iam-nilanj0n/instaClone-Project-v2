const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const postRoute = require('./routes/postRoute')
const bodyParser = require('body-parser');
const path = require('path');
// bodyparser use
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(cors());
app.use(express.json());

//connect to MongoDB compass
mongoose.connect(process.env.DATABASE_URI_mongoAtlas, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

app.use('/', postRoute);

//Static files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.listen(5000, ()=>{console.log("Express server is running on port 5000 ");})