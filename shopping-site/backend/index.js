const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is a crypto app server')
});

let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});

let apiUrl;

const options = {
  headers: { "x-messari-api-key": `${process.env.MESSARI_API_KEY}` }
};

app.post('/get-info', options).then((req, res) => {
  console.log(req.body)
  let baseUrl = `data.messari.io/api/v1/assets/btc`,
      apiKey = `${process.env.MESSARI_API_KEY}`,
  apiUrl = baseUrl + apiKey;
  console.log('api url: ', apiUrl)
  axios.get(apiUrl)
      .then(response => {
          res.json(response.data);
      })
      .catch(error => {
          console.log(error);
      });
});

app.get('/crypto', (req, res) => {
  axios.get(apiUrl)
      .then(response => {
          res.json(response.data);
      })
      .catch(error => {
          console.log(error);
          console.log('fetch crypto error');
      });
});
/* 
require("https")
  .request(
    {
      host: "data.messari.io",
      path: "/api/v1/assets/btc",
      // replace YOUR-SECRET-KEY with your actual key
      // from https://messari.io/account/api (create messari account first)
      headers: { "x-messari-api-key": `${process.env.MESSARI_API_KEY}` },
    },
    (response) => {
      let str = "";
      response.on("data", (chunk) => (str += chunk));
      response.on("end", () => console.log(JSON.parse(str)));
    }
  )
  .end(); */