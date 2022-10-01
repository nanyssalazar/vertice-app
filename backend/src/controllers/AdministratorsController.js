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
    const { adminId } = req.params.id;
    console.log(adminId);
    const admin = await Administrator.findById(req.params.id);
    if (admin) {
      return res.json(admin);
    } else {
      return res.json({ message: 'Admin not found.' });
    }
  },
  async getAdminByEmail(req, res) {
    const { email } = req.params;
    console.log(email);
    const admin = await Administrator.find({ email: email });
    //si el correo no es parte de vertice
    if (admin.length === 0) {
      return res.json({ message: 'No es administrador' });
    } else {
      return res.json({ message: 'Es administrador', admin: admin });
    }
  },
};
