const Member = require('../models/Member');
const RemovedMember = require('../models/RemovedMember');

module.exports = {
  async getAllRemovedMembers(req, res) {
    const members = await RemovedMember.aggregate([
      { $match: { _id: { $exists: true } } },
      { $sort: { gen: 1, idIest: -1 } },
    ]);
    if (members) {
      return res.json(members);
    } else {
      res.json({});
    }
  },

  async getRemovedMemberById(req, res) {
    //const { memberId } = req.params.id;
    //console.log(memberId);
    const member = await RemovedMember.findById(req.params.id);
    console.log(member);
    if (member) {
      return res.json(member);
    } else {
      return res.json({ message: 'Member not found.' });
    }
  },

  //restore member
  async restoreMember(req, res) {
    const memberId = req.params.id;
    RemovedMember.findById(memberId).then((member) => {
      console.log(member);
      Member.insertMany([member]).catch((error) => {
        console.log(error);
      });
      RemovedMember.deleteOne({ _id: memberId })
        .then((d) => {
          console.log('Alumno restaurado');
          return res.json({ message: 'Alumno restaurado.' });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
