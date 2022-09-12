var express = require('express');
var router = express.Router();

//var main_controller = require('../controllers/mainController');
var {sessionCheck} = require('../controllers/mainController');
var { navmenu, select_lines_by_ownerid } = require('../controllers/mainController');
//var lines = require('../controllers/mainController');


/* GET users listing. */
router.get('/', sessionCheck, async function(req, res) {
  var contacts = await select_lines_by_ownerid(req, res);
  console.log(contacts);
  res.render('contact', {
  title: 'Laba',
  pname: 'CONTACT',
  navmenu: navmenu,
  lines: contacts
  });
});

/*router.post(select_lines_by_ownerid, function (req, res) {
  console.log(req.body);  // выводим в консоль полученные данные
  if(!req.body) return response.sendStatus(400);
  try {
    var msg = "Запросы: " + res.body;
  } catch(err) {
    console.error(err)
  }

  res.json({ message: msg }); // отправляем ответ
});*/

// Обработка POST-запроса (принимаем данные, отправленные c помощью AJAX со страницы /contact)
router.post("/ajaxrequest", function (req, res) {
  console.log(req.body);  // выводим в консоль полученные данные
  if(!req.body) return response.sendStatus(400);
  // Читаем поле firstname из полученного json
  try {
    var msg = req.body.firstname + ", ваш запрос получен !";
  } catch(err) {
    console.error(err)
  }

  res.json({ message: msg }); // отправляем ответ
});

//router.get('/', select_lines_by_ownerid);

module.exports = router;
