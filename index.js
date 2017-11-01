const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (req.method === 'GET') {
    console.log('Request Type:', req.method);
    next();
  } else {
    console.log('Method are not GET');
  }
}, (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.use((req, res) => {
  res.send('ok');
});

app.listen(3000, () => {
  console.log('server listening on 3000 port...');
});