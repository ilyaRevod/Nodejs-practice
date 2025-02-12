import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  let calculate = fName.length + lName.length;
  res.render('index.ejs', { calculate });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
