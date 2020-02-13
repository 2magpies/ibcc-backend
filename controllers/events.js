const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

router.get('/', (req, res) => {
    Events.find({}).then(event => res.json(event));
});

router.get('/:name', (req, res) => {
    Events.find({ name: req.params.name }).then(event => res.json(event))
});

router.post('/', (req, res) => {
    let newEvents = req.body;
    Events.create(newEvents).then(event => res.json(event));
});

router.put('/:name', (req, res) => {
    let updatedEvents = req.body;
    Events.findOneAndUpdate({ name: req.params.name }, updatedEvents, {
        new: true
    }).then(event => res.json(event));
});

router.delete('/:name', (req, res) => {
    Events.findOneAndDelete({ name: req.params.name }).then(event => res.json(event));
});

module.exports = router;