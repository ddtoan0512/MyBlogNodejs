require('dotenv').config();
const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(port, ()=>{
    console.log('App listening on port ' + port);
})