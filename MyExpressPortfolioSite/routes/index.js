var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page (duplicate can be removed if you want). */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

router.get('/video',function(req, res, next)  {
  res.render('video', { title: 'Contact Me' });
});

module.exports = router;
