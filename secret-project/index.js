import express from 'express';
const app = express();

// middleware
import bodyParser from 'body-parser';
import morgan from 'morgan';

// port
const port = 3000;

// HTTP request logger middleware
app.use(morgan('tiny'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Validate
let isUserInput = false;
const pwd = "ilya83";


// middleware for auth
function auth(req, res, next) {
  const userInput = req.body.pwd;

  // checking
  if (userInput === pwd) {
    isUserInput = true;
  };

  console.log(isUserInput);

  next();
};

app.use(auth);


// route
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (isUserInput == true) {
    res.send(`Hello ${name}!!\nYou are logged in with ${email} Email address.`);
  } else {
    res.send('false');
  };
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});