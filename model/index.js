const data_penumpang = require('./data_penumpang');
const layanan = require('./layanan');
const kota = require('./kota');


const model = {};

// Model
model.data_penumpang = data_penumpang;
model.layanan = layanan;
model.kota = kota;
model.detail_pemesanan = detail_pemesanan;
model.pembayaran = pembayaran;



module.exports = model;