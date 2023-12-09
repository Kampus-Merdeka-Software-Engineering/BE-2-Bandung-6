const Kota = require('../model/kota');

async function getAllKotaTravel() {
  try {
    const result = await Kota.findAll();
    if (result.length === 0) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function getKotaByAsal(kotaAsal) {
  try {
    const result = await Kota.findAll({ where: { kota_asal_travel: kotaAsal } });
    if (!result) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function findByIdKotaTravel(id) {
  try {
    const result = await Kota.findByPk(id);
    if (!result) {
      throw new Error('Data tidak ditemukan.');
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function createKotaTravel(alamat_travel, kota_asal_travel, no_telepon_travel, gambar_travel) {
  try {
    const newKota = await Kota.create(alamat_travel, kota_asal_travel, no_telepon_travel, gambar_travel);
    return newKota;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllKotaTravel, findByIdKotaTravel, createKotaTravel, getKotaByAsal };
