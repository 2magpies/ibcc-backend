const mongoose = require('../db/connection');

const EventsSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  timezone: String,
  location: String,
  description: String,
  price: Number,
  imageUrl: {
    type: String,
    default:
      'https://images.pexels.com/photos/1449795/pexels-photo-1449795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  category: String
});

const Events = mongoose.model('events', EventsSchema);

module.exports = Events;
