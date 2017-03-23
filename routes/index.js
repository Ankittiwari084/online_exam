var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Online Test ' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin/login', { title: 'Admin Login ' });
});

module.exports = router;
