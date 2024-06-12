const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    city: String,
    distance: Number,
});

const Cities = mongoose.model('cities', citiesSchema);

module.exports = Cities;