const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// HTTP request logger middleware
app.use(morgan('tiny'));


app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "views"));



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];
// console.log(dayName);



app.get("/", (req, res) => {
  res.render("username");
});


app.post('/', (req, res) => {
  const username = req.body.username;
  res.render("index", { username, dayName });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
