const express = require('express');
const EventsController = require('./controllers/EventsController');
const MembersController = require('./controllers/MembersController');
const AdministratorController = require('./controllers/AdministratorsContoller');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send({ status: 200, message: 'CONNECTED!' });
});

routes.get('/members', MembersController.getAllMembers);
routes.post('/members', MembersController.createMember);
routes.get('/members/:id', MembersController.getMemberById);
routes.put('/members/:email', MembersController.updateProfilePicture);

routes.get('/events', EventsController.getAllEvents);
routes.post('/events', EventsController.createEvent);
routes.get('/events/:eventId', EventsController.getEventById);
routes.put('/events/:eventId/attendees/', EventsController.registerAttendee);
routes.put(
  '/events/:eventId/attendees/:memberId',
  EventsController.registerAttendance
);
routes.put(
  '/events/:eventId/attendees/false/:memberId',
  EventsController.removeAttendance
);
routes.get('/events/gen/:gen', EventsController.getEventsByGen);
routes.get('/events/all/attendees/:memberId', EventsController.calcAttendance);

routes.get('/admins', AdministratorController.getAllAdministrators);
routes.post('/admins', AdministratorController.createAdministrator);
routes.get('/admins/:id', AdministratorController.getAdminById);
routes.get('/admins/email/:email', AdministratorController.getAdminByEmail);

module.exports = routes;
