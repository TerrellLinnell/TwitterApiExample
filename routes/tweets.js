var express = require('express');
var router = express.Router();
var twit = require('twit');
var moment = require('moment');


var date = moment();
var time = date.format('hh:mm:ss A')

var T = new twit({
  consumer_key:         process.env.consumerKey,
  consumer_secret:      process.env.consumerSecret,
  access_token:         process.env.myAccessToken,
  access_token_secret:  process.env.myAccessTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

router.use(function(req, res, next){
  console.log("using the express router!");
  next();
})

/* GET home page. */
router.route('/')
  .get(function(req,res) {
    var logData;
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
      // console.log(data)
      var tweets = data.statuses.map((item) => {
        return { text: item.text, id: item.id };
      });
      console.log(tweets)
      res.render('tweets', {tweets: tweets , name: "PONY", date: date, time: time})
  })
});
// T.get('search/ids', { screen_name: tweets },  function (err, data, response) {
  // console.log(data)
// })



module.exports = router;
