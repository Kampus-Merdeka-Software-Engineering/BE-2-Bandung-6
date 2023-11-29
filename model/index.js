const customer = require('./customer');
const layanan = require('./layanan');
const city = require('./city');
const model = {};

// Model
model.customer = customer;
model.layanan = layanan;
model.city = city;


module.exports = model;