const express = require('express');
const EventsController = require('./controllers/EventsController');
const GenerationsController = require('./controllers/GenerationsController');
const MembersController = require('./controllers/MembersController');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send({ status: 200, message: 'CONNECTED!' });
});

routes.get('/generations', GenerationsController.getAllGenerations);
routes.post('/generations', GenerationsController.createGeneration);

routes.get('/members', MembersController.getAllMembers);
routes.post('/members', MembersController.createMember);

routes.get('/events', EventsController.getAllEvents);
routes.post('/events', EventsController.createEvent);

module.exports = routes;
