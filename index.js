require('dotenv').config();
const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


// Route

const adminRoute = require('./routes/admin.route');


// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/admin', adminRoute);
// app.use('/', )

app.listen(port, ()=>{
    console.log('App listening on port ' + port);
})