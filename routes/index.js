var express = require('express');
var router = express.Router();

// Подключение контроллера с переменной, содержащей структуру навигационного меню
var { navmenu } = require('../controllers/mainController');
//var footer_controller = require('../controllers/footer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Laba',
    pname: 'home',
    imgs: ["Logo1.png","Logo2.png","Logo3.png","Logo4.png","Logo5.png",],
    navmenu: navmenu,
    footmenu: ["Twitter.png", "Facebook.png", "Google.png", "Pinterest.png", "RSS.png"]
  });
});

module.exports = router;
