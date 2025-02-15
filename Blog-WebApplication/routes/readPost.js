const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");


router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  // user post
  const { title } = req.body;
  const blogsPath = path.join(__dirname, '..', 'blogs', 'blogs.json');
  let blogs = JSON.parse(fs.readFileSync(blogsPath, "utf8"));
  // checking
  const exists = blogs.some(blog => blog.title === title);
  if (!exists) {
    res.send("Does not Exists!");
  } else {
    const blogByTitle = blogs.find(blog => blog.title === title);
    if (blogByTitle) {
      const title = blogByTitle.title;
      const content = blogByTitle.content;
      res.render('blog', { title, content });
    };
  }
});

module.exports = router;