const fs = require('fs');
const path = require('path');

// Write a file
fs.writeFile(path.join(__dirname, 'files', 'myFile.txt'), 'Hello Nodejs!!', (err) => {
  if (err) throw err;
  console.log("File was Generated!");
})
