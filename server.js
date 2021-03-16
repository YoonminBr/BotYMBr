const Twit = require('twit')
require('dotenv').config()

const Bot = new Twit({
  consumer_key:         process.env.BOT_CONSUMER_KEY,
  consumer_secret:      process.env.BOT_CONSUMER_SECRET,
  access_token_key:     process.env.BOT_ACESS_TOKEN,
  access_token_secret:  process.env.BOT_ACESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  
})

// RETWEET
var Retweet = function ()
