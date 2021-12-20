const express = require('express');
const router = express.Router();

const Locatie = require('./models/locatie');
const TypeActiviteit = require('./models/type_activiteit');
const Activiteit = require('./models/activiteit');
const Datum = require('./models/datum');


router.get('/', (req, res) => {
    console.log('/ route called');
    res.send('<h1>Welkom op de api van scheldeoord</h1>');
});

router.get('/locatie', async(req, res) => {
    console.log('/locatie route called');
    try {
        res.json(await Locatie.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/type_activiteit', async(req, res) => {
    console.log('/type_activiteit route called');
    try {
        res.json(await TypeActiviteit.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/activiteit', async(req, res) => {
    console.log('/activiteit route called');
    try {
        res.json(await Activiteit.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/datum', async(req, res) => {
    console.log('/datum route called');
    try {
        res.json(await Datum.find().populate('activiteiten'));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/activiteit/:id', async(req, res) => {
    console.log('/activiteit/:id route called');
    try {
        res.json(await Activiteit.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;