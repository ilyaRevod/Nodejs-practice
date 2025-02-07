const fs = require('fs');
const path = require('path');

// appendFile
fs.appendFile(path.join(__dirname, 'files', 'myFile.txt'), '\nappended DATA', (err) => {
  if (err) throw err;
  console.log("Complete");
})
