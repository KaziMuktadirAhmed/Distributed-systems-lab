const express = require('express');
const router = express.Router();

const userController = require('../controllers/s1.controller');

router.get('/service1', userController.getData);
router.post('/service1', userController.writeData);

module.exports = router;