var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next){
  res.render('main')
})

router.get('/introduction', function(req, res, next){
  res.render('introduction')
});

router.get('/cookie', function(req, res, next){
    res.render('cookie')
})

router.get('/roll', function(req, res, next){
    res.render('roll')
})


router.get('/cream', function(req, res, next){
    res.render('cream')
})


router.get('/macaron', function(req, res, next){
    res.render('macaron')
})

router.get('/flowercake', function(req, res, next){
    res.render('flowercake')
})


router.get('/photo', function(req, res, next){
    res.render('photo')
})
router.get('/order', function(req, res, next){
    res.render('order')
})


module.exports = router;
