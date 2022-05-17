const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/** ** ** ** ** ** ** ** ** ** ** **
Catch unknown requests
** ** ** ** ** ** ** ** ** ** ** **/
router.get('*', function(req, res) {
	res.redirect("/")
});

module.exports = router;
