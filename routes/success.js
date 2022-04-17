const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const successController = require('../controllers/contact');

router.get('/success', successController.getSuccessPage);


module.exports = router;
