const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  status: String,
  availability: Number,
  img: String,
  generation: Array,
  committee: Array,
  modality: String,
  place: String,
  eventType: String,
  attendees: Array,
  points: Number,
  semester: String,
});

module.exports = mongoose.model('Event', EventSchema);
