const Administrator = require('../models/Administrator');

module.exports = {
  async getAllAdministrators(req, res) {
    const admins = await Administrator.find({});
    if (admins) {
      return res.json(admins);
    } else {
      res.json({});
    }
  },
  async createAdministrator(req, res) {
    const { name, lastNames, email } = req.body;
    console.log(req);
    const admin = await Administrator.create({
      name,
      lastNames,
      email,
    });
    console.log(admin);
    return res.json(admin);
  },
  async getAdminById(req, res) {
    //const { adminId } = req.params.id;
    //console.log(adminId);
    const admin = await Administrator.findById(req.params.id);
    if (admin) {
      return res.json(admin);
    } else {
      return res.json({ message: 'Admin not found.' });
    }
  },
};
