const Layanan = require('../model/layanan');
// const sequelize = require('../config/sequelize');

async function getAllLayanan() {
  try {
    const result = await Layanan.findAll();
    if (result.length === 0) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function getLayananById(id) {
  try {
    const result = await Layanan.findByPk(id);
    if (result.length === 0) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function createLayanan(kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket) {
  try {
    const newLayanan = await Layanan.create(kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket);
    return newLayanan;
  } catch (error) {
    throw error;
  }
}

module.exports = {getAllLayanan, getLayananById, createLayanan};