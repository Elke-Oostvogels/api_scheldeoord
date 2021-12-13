const mongoose = require('mongoose');

const TypeActiviteitSchema = new mongoose.Schema({
    type_activiteit: { type: String }
}, {
    collection: 'TypeActiviteit'
});

module.exports = mongoose.model('TypeActiviteit', TypeActiviteitSchema);