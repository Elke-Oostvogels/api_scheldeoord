const mongoose = require('mongoose');
const Locaties = require('./locatie');
const TypeActiviteit = require('./type_activiteit');

const ActiviteitSchema = new mongoose.Schema({
    naam: { type: String },
    begin_tijd: { type: Date },
    eind_tijd: { type: Date },
    leeftijdscat: { type: String },
    type_activiteit: { type: mongoose.Schema.Types.ObjectId, ref: TypeActiviteit },
    locatie: { type: mongoose.Schema.Types.ObjectId, ref: Locaties },
    beschrijving: { type: String },
    pers_limiet: { type: String },
    prijs: { type: Number }
}, {
    collection: 'Activiteit'
});

module.exports = mongoose.model('Activiteit', ActiviteitSchema);