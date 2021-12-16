const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send('새로운 시작');
});

app.get('/oth', (req, res) => {
  res.redirect(
    'https://github.com/login/oauth/authorize?client_id=fc3a64e7e9f04b0db748&redirect_uri=http://localhost:3000/callback',
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
      client_id: 'fc3a64e7e9f04b0db748',
      client_secret: 'f1a1d7df1ffa75407db4e674687bb07d69f10ca6',
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
