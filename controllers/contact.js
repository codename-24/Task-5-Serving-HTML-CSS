const path = require('path');
const rootDir = require('../util/path');

exports.getContactsPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  }

 exports.postContactsPage =  (req, res, next) => {
    res.redirect('/success');
  }

  exports.getSuccessPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
  }

  exports.getShopPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }