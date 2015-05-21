var express = require('express');
var router = express.Router();

/* GET event page */
router.get('/', function(req, res, next) {
  res.render('events/index', { title: 'Choose Event' });
});



module.exports = router;
