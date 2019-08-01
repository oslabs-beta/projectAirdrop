const adModel = require('../models/adminModel');
const adminController = {};

adminController.setPassword = (req, res, next) => {
  adModel.setPassword(req.body);
  next();
}
adminController.setNewAdmin = (req, res, next) => {
  adModel.setNewAdmin(req.body);
  next();
}

module.exports = adminController;