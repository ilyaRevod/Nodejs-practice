const fs = require('fs');
const path = require('path');

// Read a file
fs.readFile(path.join(__dirname, 'files', 'myFile.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})