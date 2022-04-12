const mongoose = require('mongoose');

const AdministratorSchema = new mongoose.Schema({
  name: String,
  lastNames: String,
  email: String,
});

module.exports = mongoose.model('Administrator', AdministratorSchema);
