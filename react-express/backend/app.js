const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello jasong!');
});

app.listen(8080, () => {
  console.log('listening port 8080');
});
