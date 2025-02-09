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
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/register', (req, res) => {
  // console.log(req.body);
  const { name, email } = req.body;
  res.send(`Hello ${name}!!\nYou are logged in with ${email} Email address.`);
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
