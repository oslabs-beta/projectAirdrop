const adModel = require('../models/adminModel');
const adminController = {};

adminController.setPassword = (req, res, next) => {
  adModel.setPassword(req.body.queryObj);
  next();
}