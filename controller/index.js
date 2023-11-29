const customer = require('./customer');
const layanan = require('./layanan');
const controller = {};

// controler customer
controller.customer = customer;
controller.layanan = layanan;

module.exports = controller;