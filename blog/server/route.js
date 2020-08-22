const express = require('express')
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData); //컨트롤러와 연결

router.post('/add/data', controller.api.addData);
router.post('/modify/data', controller.api.modifyData);
router.post('/delete/data', controller.api.deleteData);

module.exports = router;

