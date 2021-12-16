const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('새로운 시작');
});

app.get('/oth', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID_GITHUB}&redirect_uri=${process.env.CALLBACK_GITHUB}`,
  );
});

app.get('/callback', async (req, res) => {
  console.log('callback', req.query);

  let axiosConfig = {
    headers: {
      Accept: 'application/json',
    },
  };

  const data = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: `${process.env.CLIENT_ID_GITHUB}`,
      client_secret: `${process.env.CLIENT_SECRET_GITHUB}`,
      code: `${req.query.code}`,
    },
    axiosConfig,
  );

  let axiosConfigs = {
    headers: {
      Authorization: `token ${data.data.access_token}`,
    },
  };

  const user = await axios.get('https://api.github.com/user', axiosConfigs);

  console.log('user', user.data.login);

  res.redirect('http://localhost:3001');
});

app.listen(3000, () => {
  console.log('listen 3000 port...');
});
