const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

//SHOW
router.get('/', (req, res) => {
  Events.find({}).then(event => res.json(event));
});

//VIEW
router.get('/:id', (req, res) => {
  Events.findById(req.params.id).then(event => res.json(event));
});

//CREATE
router.post('/', (req, res) => {
  let newEvents = req.body;
  Events.create(newEvents).then(event => res.json(event));
});

//UPDATE
router.put('/:id', (req, res) => {
  let updatedEvents = req.body;
  Events.findOneAndUpdate({ _id: req.params.id }, updatedEvents, {
    new: true
  }).then(event => res.json(event));
});

//DELETE
router.delete('/:id', (req, res) => {
  Events.findOneAndDelete({ _id: req.params.id }).then(event =>
    res.json(event)
  );
});

module.exports = router;
