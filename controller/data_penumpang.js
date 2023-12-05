const datapenumpangService = require('../service/data_penumpang');

// controler getall
const getDataPenumpang = async (req, res) => {
  try {
    const result = await datapenumpangService.getAllDataPenumpang();
    res.json(result);
  } catch (error) {
    console.error('Gagal mendapatkan daftar data penumpang:', error);
    res.status(500).json({ error: 'Gagal mendapatkan daftar data penumpang' });
  }
};
// controler create
const createDataPenumpang = async (req, res) => {
  try {
    const { nama_lengkap, alamat_email, no_telepon, alamat, jumlah_tiket, tanggal_pemesanan, keterangan } = req.body;
    const newDataPenumpang = await datapenumpangServiceService.createKota({ nama_lengkap, alamat_email, no_telepon, alamat, jumlah_tiket, tanggal_pemesanan, keterangan });

    res.status(201).json({
      message: 'Data penumpang berhasil dibuat',
      data: newDataPenumpang,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal membuat data penumpang',
      error: error.message,
    });
  }
};
const getDataPenumpangWithId = async (req, res) => {
    const DataPenumpangId = req.params.id;
    try {
      const DataPenumpang = await datapenumpangService.findByIdDataPenumpang(DataPenumpangId);
  
      if (!DataPenumpang) {
        return res.status(404).json({ message: 'Data penumpang tidak ditemukan.' });
      }
  
      return res.status(200).json(DataPenumpang);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return res.status(500).json({ message: 'Terjadi kesalahan internal.' });
    }
  };

module.exports = { getDataPenumpang, createDataPenumpang, getDataPenumpangWithId};
