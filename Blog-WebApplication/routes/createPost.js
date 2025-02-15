const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");


router.get('/', (req, res) => {
  res.render('create');
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  const blogsPath = path.join(__dirname, '..', 'blogs', 'blogs.json');
  let blogs = JSON.parse(fs.readFileSync(blogsPath, "utf8"));

  // craete new post
  const newPost = {
    id: blogs.length,
    title,
    content
  };
  blogs.push(newPost);

  fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), "utf8");
  res.render('blog', { title, content });
});


module.exports = router;