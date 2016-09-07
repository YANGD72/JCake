var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next){
  res.render('main')
})


router.get('/introduce', function(req, res, next){
  res.render('introduce')
})

module.exports = router;
