const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', (req, res) => {
  Users.find({}).then(user => res.json(user));
});

router.get('/:name', (req, res) => {
  Users.find({ name: req.params.name }).then(user => res.json(user));
});

router.post('/', (req, res) => {
  let newUsers = req.body;
  Users.create(newUsers).then(user => res.json(user));
});

router.put('/:name', (req, res) => {
  let updatedUsers = req.body;
  Users.findOneAndUpdate({ name: req.params.name }, updatedUsers, {
    new: true
  }).then(user => res.json(user));
});

router.delete('/:name', (req, res) => {
  Users.findOneAndDelete({ name: req.params.name }).then(user =>
    res.json(user)
  );
});

module.exports = router;
