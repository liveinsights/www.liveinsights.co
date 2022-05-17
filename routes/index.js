const express = require('express');
const router = express.Router();

// Load package.json to display tech stack on index.pug
const packageJSON = require('../package.json');
// Provide easy-to-read package.json
const techStack = JSON.stringify( packageJSON['dependencies'], null, 4 )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS on Plesk', techStack: techStack });
});

/** ** ** ** ** ** ** ** ** ** ** **
Catch unknown requests
** ** ** ** ** ** ** ** ** ** ** **/
router.get('*', function(req, res) {
	res.redirect("/")
});

module.exports = router;