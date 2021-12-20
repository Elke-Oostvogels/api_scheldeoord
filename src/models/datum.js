const mongoose = require('mongoose');
const Activiteit = require('./activiteit');

const DatumSchema = new mongoose.Schema({
    id: { type: String },
    date: { type: Date },
    activiteiten: [{ type: mongoose.Schema.Types.ObjectId, ref: Activiteit }],
}, {
    collection: 'Datum'
});

module.exports = mongoose.model('Datum', DatumSchema);