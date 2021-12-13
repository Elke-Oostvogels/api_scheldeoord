const mongoose = require('mongoose');

const LocatieSchema = new mongoose.Schema({
    locatie: { type: String }
}, {
    collection: 'Locaties'
});

module.exports = mongoose.model('Locatie', LocatieSchema);