const express = require('express');
const router  = express.Router();

const adminController = require('../controller/admin.controller');

router.get('/', adminController.index);

router.get('/login', adminController.login);

router.post('/login', adminController.postLogin);

module.exports = router;