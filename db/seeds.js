const Users = require('../models/Users');
const Events = require('../models/Events');
const eventsData = require('./events.json');
const usersData = require('./users.json');

Users.deleteMany({})
  .then(() => {
    return Users.collection.insertMany(usersData);
  })
  .then(() => {
    Events.deleteMany({})
      .then(() => {
        return Events.collection.insertMany(eventsData);
      })
      .then(() => {
        process.exit();
      });
  });
