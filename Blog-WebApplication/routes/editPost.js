const express = require('express');
const router = express.Router();

// const blogs = require('../blogs/blogs');


router.get('/', (req, res) => {
  res.render('edit');
});


router.post('/', (req, res) => {
  const { id, title } = req.body;
  console.log(id, title);

  res.send("Deleted!");
});


module.exports = router;