const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const contactController = require('../controllers/contact');
const getContactsPage  = require('../controllers/contact');

const router = express.Router();

router.get('/contact-us', contactController.getContactsPage);

router.post('/contact-us', contactController.postContactsPage);

module.exports = router;
