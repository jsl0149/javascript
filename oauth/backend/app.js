const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('새로운 시작');
});

app.listen(3000, () => {
  console.log('listen 3000 port...');
});
