const mongoose = require('mongoose');

const cityPartFareSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    fare: Number,
});

const CityPartFare = mongoose.model('city_part_fare', cityPartFareSchema, "city_part_fare");

module.exports = CityPartFare;