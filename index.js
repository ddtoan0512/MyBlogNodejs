require('dotenv').config();
const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const cookiParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;

mongoose.connect(process.env.MONGO_URL);

const adminRoute = require('./routes/admin.route');
const authRoute = require('./routes/auth.route');

const authMiddleware = require('./middlewares/auth.middleware');
// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(cookiParser('qwerty13213123123'));



app.use('/login', authRoute)
app.use('/admin', authMiddleware.requireAuth, adminRoute);

app.listen(port, ()=>{
    console.log('App listening on port ' + port);
})