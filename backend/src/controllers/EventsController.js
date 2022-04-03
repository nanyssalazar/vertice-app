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
      type,
      attendees,
      value,
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
      type,
      attendees,
      value,
      semester,
    });
    console.log(event);
    return res.json(event);
  },
  //edit event
  //remove event
};
