const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.send(`<h2>Hello world!</h2>`);
});

app.listen(3000, () => {
  console.log('test server listening - port : 3000');
});
