const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', (req, res) => {
  Users.find({}).then(user => res.json(user));
});

router.get('/:id', (req, res) => {
  Users.find({ _id: req.params.id }).then(user => res.json(user));
});

router.post('/', (req, res) => {
  let newUsers = req.body;
  Users.create(newUsers).then(user => res.json(user));
});

router.put('/:id', (req, res) => {
  let updatedUsers = req.body;
  Users.findOneAndUpdate({ _id: req.params.id }, updatedUsers, {
    new: true
  }).then(user => res.json(user));
});

router.delete('/:id', (req, res) => {
  Users.findOneAndDelete({ _id: req.params.id }).then(user => res.json(user));
});

module.exports = router;
