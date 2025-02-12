const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "Hello i'm ilya",
    seconds: new Date().getSeconds(),
    items: ["JS", "CSS", "HTML"],
    htmlContent: "<h3>This is some h3 text</h3>",
  };
  res.render("index.ejs", data);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});