'use strict';

const coinbase = require('coinbase-commerce-node');
const API_KEY = process.env.COINBASE_COMMERCE_API_KEY;

const Client = coinbase.Client;
const Charge = coinbase.resources.Charge;

let client = Client.init(API_KEY);

let someCharge = new Charge({
  
  "description": "Mastering how to destroy all memes",
  "metadata": {
    "customer_name": "anonymous hooligan"
  },
  "name": "First Charge For Fun",
  "payments": [],
  "pricing_type": "no_price"

});




