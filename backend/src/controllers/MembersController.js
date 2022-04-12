const Member = require('../models/Member');

module.exports = {
  async getAllMembers(req, res) {
    const members = await Member.find({});
    if (members) {
      return res.json(members);
    } else {
      res.json({});
    }
  },
  async createMember(req, res) {
    const {
      name,
      lastNames,
      idIest,
      email,
      gen,
      bachelor,
      profilePicture,
      attendance,
    } = req.body;
    console.log(req);
    const member = await Member.create({
      name,
      lastNames,
      idIest,
      email,
      gen,
      bachelor,
      profilePicture,
      attendance,
    });
    console.log(member);
    return res.json(member);
  },
  async getMemberById(req, res) {
    //const { memberId } = req.params.id;
    //console.log(memberId);
    const member = await Member.findById(req.params.id);
    console.log(member);
    if (member) {
      return res.json(member);
    } else {
      return res.json({ message: 'Member not found.' });
    }
  },
  async updateProfilePicture(req, res) {
    const { email } = req.params;
    console.log(email);
    const member = await Member.find({ email: email });
    //si el correo no es parte de vertice
    if (member.length === 0) {
      return res.json({ message: 'Alumno no es miembro.' });
    } else {
      //checar si se ha actualizado la pfp
      if (member[0].profilePicture !== req.body.headers.profilePicture) {
        try {
          //actualizar pfp
          await Member.updateOne({ email: email }, { $set: req.body.headers });
          return res.json({ message: 'Alumno es miembro. Foto actualizada' });
        } catch (e) {
          return res.json({
            message: 'Alumno es miembro. Foto no se actualizo',
          });
        }
      } else {
        return res.json({ message: 'Alumno es miembro.' });
      }
    }
  },
  //getMembersByGen
  //editMember
  //removeMember
};
