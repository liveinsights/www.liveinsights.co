var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res) {
    var path = req.params[0];
    res.render('../../public/app/' + path);
});

module.exports = router;
