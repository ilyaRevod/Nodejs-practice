import express from 'express';
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>\n<p>This is a P tag</p>');
})

app.get('/node', (req, res) => {
  res.send('<h1>Node</h1>');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})