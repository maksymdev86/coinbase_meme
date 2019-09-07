'use strict';

const coinbase = require('coinbase-commerce-node');
const API_KEY = process.env.COINBASE_COMMERCE_API_KEY;

const Client = coinbase.Client;
const Charge = coinbase.resources.Charge;

let client = Client.init(API_KEY);

let someCharge = new Charge({
  
  "name": "First Charge For Fun",
  "description": "Mastering how to destroy all memes",
  "logo_url": "https://scontent-sjc3-1.cdninstagram.com/vp/d749b74ff0e00818cc4e9bdcb4406e1b/5DFE2A58/t51.2885-15/e35/65997172_146976953043568_7513483871545499946_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
  "metadata": {
    "customer_name": "anonymous hooligan"
  },
  "payments": [],
  "pricing_type": "no_price",
  "addresses": {
    "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
    "ethereum": "0x0000000000000000000000000000000000000000"
  }
});


async function run() {
  
  console.log("Starting to charge");
  const res = await someCharge.save();
  console.log("Seems we've created it?");
  console.log(JSON.parse(JSON.stringify(res)));

  console.log(`Response ID: ${res.id}`);

}



module.exports = {
  "run": run
};
