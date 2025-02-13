const express = require('express');
const app = express();
const PORT = 3000;

// static files
app.use(express.static('public'));


// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', (req, res) => {
  res.render('index');
});

// about
app.get('/about', (req, res) => {
  res.render('about');
});

// contact
app.get('/contact', (req, res) => {
  res.render('contact');
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
