const express = require('express');
const app = express();
const path = require('path');

const fe_dir_path = path.join(__dirname, '../frontend/build');
const dotenv = require('dotenv');

app.use(express.static(fe_dir_path));

// give static index.html file if exists or throw 404 error
app.get('/', (req, res) => {
  app.sendFile(path.join(fe_dir_path, 'index.html'), err => {
    if (err) {
      res.status(404).send('Not found');
    }
  });
});

app.listen(8080, () => {
  console.log('listening port 8080');
});
