const express = require('express');
const EventsController = require('./controllers/EventsController');
const MembersController = require('./controllers/MembersController');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send({ status: 200, message: 'CONNECTED!' });
});

routes.get('/members', MembersController.getAllMembers);
routes.post('/members', MembersController.createMember);
routes.put('/members/:email', MembersController.updateProfilePicture);

routes.get('/events', EventsController.getAllEvents);
routes.post('/events', EventsController.createEvent);
routes.get('/events/:eventId', EventsController.getEventById);
routes.put('/events/:eventId/attendees/', EventsController.registerAttendee);
routes.put(
  '/events/:eventId/attendees/:memberId',
  EventsController.registerAttendance
);

module.exports = routes;
