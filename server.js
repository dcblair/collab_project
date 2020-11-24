require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');

// middleware - JSON parsing
app.use(express.json())

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.use('/user', require('./routes/user'));

var server = app.listen(process.env.PORT || 3000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;



