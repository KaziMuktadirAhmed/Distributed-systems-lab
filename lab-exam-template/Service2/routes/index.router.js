const express = require('express');
const router = express.Router();

const userController = require('../controllers/s2.controller');

router.get('/service2', userController.getData);
router.post('/service2', userController.writeData);

module.exports = router;