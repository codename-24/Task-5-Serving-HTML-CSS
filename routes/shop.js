const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const shopController = require('../controllers/contact');

const router = express.Router();

router.get('/', shopController.getShopPage );

module.exports = router;
