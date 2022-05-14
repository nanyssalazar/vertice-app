const Event = require('../models/Event');

module.exports = {
  async getAllEvents(req, res) {
    const events = await Event.find({});
    if (events) {
      return res.json(events);
    } else {
      res.json({});
    }
  },
  async createEvent(req, res) {
    const {
      title,
      description,
      date,
      status,
      availability,
      img,
      generation,
      committee,
      modality,
      place,
      eventType,
      //attendees,
      points,
      semester,
    } = req.body;
    console.log(req);
    const event = await Event.create({
      title,
      description,
      date,
      status,
      availability,
      img,
      generation,
      committee,
      modality,
      place,
      eventType,
      //attendees,
      points,
      semester,
    });
    console.log(event);
    return res.json(event);
  },
  async getEventById(req, res) {
    const { eventId } = req.params;
    console.log(eventId);
    const event = await Event.findById(eventId);
    if (event) {
      return res.json(event);
    } else {
      return res.json({ message: 'Event not found.' });
    }
  },
  // add attendee
  async registerAttendee(req, res) {
    const { eventId } = req.params;
    console.log(eventId);
    try {
      const isRegistered = await Event.find({
        _id: eventId,
        'attendees.id': req.body.id,
      });
      if (isRegistered != 0) {
        return res.json({ message: 'Member already registered' });
      }
      await Event.updateOne(
        { _id: eventId, availability: { $gt: 0 } },
        {
          $inc: { availability: -1 },
          $push: { attendees: req.body },
        }
      );
      console.log('registrando');
      return res.json({ message: 'You were registered succesfully' });
    } catch (e) {
      console.log('error');
      return res.json({ message: 'You were not registed' });
    }
  },
  //add attendance
  async registerAttendance(req, res) {
    const { eventId, memberId } = req.params;
    console.log(req.params);
    console.log(req.body);
    try {
      await Event.updateOne(
        {
          _id: eventId,
          'attendees.id': memberId,
        },
        {
          $set: {
            'attendees.$.attended': req.body.attended,
            'attendees.$.points': req.body.points, //mandar desde el front
          },
        }
      );
      console.log('asistencia registrada');
      return res.json({ message: 'Attendace registered succesfully' });
    } catch (e) {
      console.log('error al registrar asistencia');
      return res.json({ message: 'Attendance not registered' });
    }
  },
  //get events according to gen
  async getEventsByGen(req, res) {
    const { gen } = req.params;
    const events = await Event.aggregate([
      {
        $match: {
          status: 'Active',
          availability: { $gt: 0 },
          generation: { $in: [gen] },
        },
      },
    ]);
    console.log(events);
    if (events) {
      console.log(events);
      return res.json(events);
    } else {
      res.json({ message: 'No se encontraron eventos' });
    }
  },
  //not used methods
  // remove attendance
  async removeAttendance(req, res) {
    const { eventId, memberId } = req.params;
    console.log(req);
    try {
      await Event.updateOne(
        {
          _id: eventId,
          'attendees.id': memberId,
        },
        {
          $set: {
            'attendees.$.attended': false,
            'attendees.$.points': 0,
          },
        }
      );
      console.log('asistencia registrada');
      return res.json({ message: 'Attendace removed succesfully' });
    } catch (e) {
      console.log('error al registrar asistencia');
      return res.json({ message: 'Attendance not changed' });
    }
  },
  // edit points
  async editPoints(req, res) {
    const { eventId, memberId, points } = req.params;
    //console.log(req);
    try {
      await Event.updateOne(
        {
          _id: eventId,
          'attendees.id': memberId,
        },
        {
          $set: {
            'attendees.$.points': points,
          },
        }
      );
      console.log('asistencia registrada');
      return res.json({ message: 'Points edited succesfully' });
    } catch (e) {
      console.log('error al registrar asistencia');
      return res.json({ message: 'Points not edited' });
    }
  },
  // calc Points from member
  async calcPoints(req, res) {
    const { memberId } = req.params;
    const totalPoints = await Event.aggregate([
      { $match: { 'attendees.id': memberId, 'attendees.attended': true } },
      { $group: { _id: null, totalPoints: { $sum: '$points' } } },
    ]);
    console.log(totalPoints);
    if (totalPoints) {
      console.log(totalPoints);
      return res.json(totalPoints);
    } else {
      res.json({ message: 'no se encontraron eventos' });
    }
  },
  async getAttendance(req, res) {
    const { memberId } = req.params;
    const events = await Event.aggregate([
      { $match: { 'attendees.id': memberId, semester: 'AGO-DIC 2022' } },
      // { $group: {"_id": "$_id", "Link": {$push: "$Link"}, "count": { "$sum": 1 }}},
      {
        $project: {
          _id: 1,
          title: 1,
          date: 1,
          points: 1,
          member: {
            $filter: {
              input: '$attendees',
              as: 'attendee',
              cond: { $eq: ['$$attendee.id', memberId] },
            },
          },
        },
      },
      { $sort: { date: -1 } },
    ]);
    console.log(events);
    if (events) {
      console.log(events);
      return res.json(events);
    } else {
      res.json({ message: 'No se encontraron eventos' });
    }
  },
};
