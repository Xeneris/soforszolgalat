const mongoose = require('mongoose');

const cityPartsSchema = new mongoose.Schema({
    city_part: String,
});

const CityParts = mongoose.model('city_parts', cityPartsSchema);

module.exports = CityParts;