var express = require('express');
var moment = require('moment');

var router = express.Router();

router.use(function(req, res, next){
  console.log("using the express router!");
  next();
})

/* GET home page. */
router.route('/')
.get(function(req, res) {
  res.render('index', { name: 'Pony', date: moment().format("MMM Do YYYY"),
                           time: moment().format("hh:mm:ss A")});
                         });


module.exports = router;
