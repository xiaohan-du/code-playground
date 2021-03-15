const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
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
  .end();