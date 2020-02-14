const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

//SHOW
router.get('/', (req, res) => {
    Events.find({}).then(event => res.json(event));
});

//VIEW
router.get('/:name', (req, res) => {
    Events.find({ name: req.params.name }).then(event => res.json(event))
});

//CREATE
router.post('/', (req, res) => {
    let newEvents = req.body;
    Events.create(newEvents).then(event => res.json(event));
});

//UPDATE
router.put('/:name', (req, res) => {
    let updatedEvents = req.body;
    Events.findOneAndUpdate({ name: req.params.name }, updatedEvents, {
        new: true
    }).then(event => res.json(event));
});

//DELETE
router.delete('/:name', (req, res) => {
    Events.findOneAndDelete({ name: req.params.name }).then(event => res.json(event));
});

module.exports = router;