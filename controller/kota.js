const kotaService = require('../service/kota');

// controler getall
const getKotaTravel = async (req, res) => {
  try {
    const result = await kotaService.getAllKotaTravel();
    res.json(result);
  } catch (error) {
    console.error('Gagal mendapatkan daftar kota travel:', error);
    res.status(500).json({ error: 'Gagal mendapatkan daftar kota travel' });
  }
};
// controler create
const createKotaTravel = async (req, res) => {
  try {
    const { alamat_travel, kota_asal_travel, no_telepon_travel, gambar_travel } = req.body;
    const newKotaTravel = await kotaService.createKotaTravel({ alamat_travel, kota_asal_travel, no_telepon_travel, gambar_travel });

    res.status(201).json({
      message: 'Kota travel berhasil dibuat',
      data: newKotaTravel,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal membuat kota travel',
      error: error.message,
    });
  }
};
async function getKotaByAsal(req, res) {
  const kotaAsal = req.params.kotaAsal;

  try {
    const kota = await kotaService.getKotaByAsal(kotaAsal);
    if (kota) {
      res.json(kota);
    } else {
      res.status(404).json({ error: 'Kota tidak ditemukan.' });
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data kota.' });
  }
}
const getKotaTravelWithId = async (req, res) => {
    const kotaId = req.params.id;
    try {
      const kota = await kotaService.findByIdKotaTravel(kotaId);
  
      if (!kota) {
        return res.status(404).json({ message: 'kota tidak ditemukan.' });
      }
  
      return res.status(200).json(kota);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return res.status(500).json({ message: 'Terjadi kesalahan internal.' });
    }
  };

module.exports = { getKotaTravel, createKotaTravel, getKotaTravelWithId, getKotaByAsal };
