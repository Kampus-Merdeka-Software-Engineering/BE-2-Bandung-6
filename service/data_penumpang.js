const DataPenumpang = require('../model/data_penumpang');


async function getAllDataPenumpang() {
  try {
    const result = await DataPenumpang.findAll();
    if (result.length === 0) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function findByIdDataPenumpang(id) {
    try {
      const result = await DataPenumpang.findByPk(id);
      if (!result) {
        throw new Error('Data tidak ditemukan.');
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

async function createDataPenumpang(nama_lengkap, alamat_email, no_telepon, alamat, jumlah_tiket, tanggal_pemesanan, keterangan) {
  try {
    const newDataPenumpang = await DataPenumpang.create(nama_lengkap, alamat_email, no_telepon, alamat, jumlah_tiket, tanggal_pemesanan, keterangan);
    return newDataPenumpang;
  } catch (error) {
    throw error;
  }
}

module.exports = {getAllDataPenumpang, createDataPenumpang, findByIdDataPenumpang };
