const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

// routes
const createPost = require('./routes/createPost');
const editPost = require('./routes/editPost');


// static files
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

// use body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HTTP request logger middleware
app.use(morgan('tiny'));


// home page
app.get('/', (req, res) => {
  res.render('index');
});

// blog page
app.get('/blog', (req, res) => {
  res.render('blog');
});

// create post page
app.use('/create', createPost);


// edit post page
app.use('/edit', editPost);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});