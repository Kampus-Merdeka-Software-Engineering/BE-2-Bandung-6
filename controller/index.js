const data_penumpang = require('./data_penumpang');
const layanan = require('./layanan');
const detail_pemesanan = require('./detail_pemesanan');
const kota = require('./kota');
const pembayaran = require('./pembayaran');
const controller = {};

controller.data_penumpang = data_penumpang;
controller.layanan = layanan;
controller.kota = kota;
controller.detail_pemesanan = detail_pemesanan;
controller.pembayaran = pembayaran;

module.exports = controller;
