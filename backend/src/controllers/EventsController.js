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
    console.log();
    try {
      await Event.updateOne(
        { _id: eventId, availability: { $gt: 0 } },
        {
          $inc: { availability: -1 },
          $push: { attendees: req.body.body },
        }
      );
      console.log('registrando');
      return res.json({ message: 'Register succesfull' });
    } catch (e) {
      console.log('error');
      return res.json({ message: 'You were not registed' });
    }
  },
  //add attendance
  async registerAttendance(req, res) {
    const { eventId, memberId } = req.params;
    //console.log(req);
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
  // remove attendance
  async removeAttendance(req, res) {
    const { eventId, memberId } = req.params;
    //console.log(req);
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
  async calcAttendance(req, res) {
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
  //remove event
};
