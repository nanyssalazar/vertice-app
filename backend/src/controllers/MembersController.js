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
  //getMembersByGen
  //editMember
  //removeMember
};
