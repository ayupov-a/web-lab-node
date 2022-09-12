var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { 
    footmenu: ["Twitter.png", "Facebook.png", "Google.png", "Pinterest.png", "RSS.png"]
  });
});

module.exports = router;