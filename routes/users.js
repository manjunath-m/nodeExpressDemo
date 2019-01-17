var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(201).send({'name':'manjunath'});
});

router.post('/post', function(req, res, next) {
  res.send('respond with a resource: Manjunath');
});


router.get('/byName', function(req, res, next) {
  res.send('respond with a resource: Manju');
});


module.exports = router;
