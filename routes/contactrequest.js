var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/mainController');  // подключение контроллера

/*
Привязываем методы контроллера к соответствующим маршрутам
*/
router.get('/', main_controller.get_contact_req_all);
router.get('/author/:firstname', main_controller.get_contact_req_by_firstname);
router.get('/:id', main_controller.get_contact_req_by_id);
router.post('/', main_controller.create_contact_req);
router.put('/:id', main_controller.update_contact_req_by_id);
router.delete('/:id', main_controller.delete_contact_req_by_id);

module.exports = router;