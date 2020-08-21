var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ryan Shillingford : Front End Developer' });
});

module.exports = router;
