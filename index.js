const usersController = require('./controllers/users');
const eventsController = require('./controllers/events');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/ibcc');
});

app.use('/users', usersController);
app.use('/events', eventsController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
