const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const api = `https://api.unsplash.com/search/photos/?query=office&client_id=${process.env.UNSPLASH_API_ACCESS_KEY}`;
app.use(cors());
app.get('/', (req, res) => {
  res.send('go to /image to see image')
});
app.get('/image', (req, res) => {
  axios.get(api)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});