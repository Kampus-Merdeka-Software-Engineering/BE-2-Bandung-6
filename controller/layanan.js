const layananService = require('../service/layanan');

// controler getall
const getLayanan = async (req, res) => {
  try {
    const result = await layananService.getAllLayanan();
    res.json(result);
  } catch (error) {
    console.error('Gagal mendapatkan daftar layanan:', error);
    res.status(500).json({ error: 'Gagal mendapatkan daftar layanan' });
  }
};
const createLayanan = async (req, res) => {
  try {
    const { kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket } = req.body;
    const newLayanan = await layananService.createLayanan({ kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket });

    res.status(201).json({
      message: 'Layanan berhasil dibuat',
      data: newLayanan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal membuat layanan',
      error: error.message,
    });
  }
};
const getLayananWithId = async (req, res) => {
  const layananId = req.params.id;
  try {
    const layanan = await layananService.findByIdLayanan(layananId);

    if (!layanan) {
      return res.status(404).json({ message: 'Layanan tidak ditemukan.' });
    }

    return res.status(200).json(layanan);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan internal.' });
  }
};




module.exports = { getLayanan, createLayanan, getLayananWithId };
