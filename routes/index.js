const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS on Plesk' });
});

/** ** ** ** ** ** ** ** ** ** ** **
Catch unknown requests
** ** ** ** ** ** ** ** ** ** ** **/
router.get('*', function(req, res) {
	res.redirect("/")
});

module.exports = router;
