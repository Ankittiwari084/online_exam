var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('admin/login', { title: 'Admin Login ' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: 'Admin Login ' });
});


//login post action.
router.post('/postlogin', function(req, res, next) {
  res.send(req);
});
module.exports = router;
