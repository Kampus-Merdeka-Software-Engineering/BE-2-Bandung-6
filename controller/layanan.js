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
const createLayanan = async(req, res) => {
    try {
        const { kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket } = req.body;
        const newUser = await layananService.createLayanan({ kota_asal, kota_tujuan, tanggal_keberangkatan, jam_keberangkatan, batas_tiket, harga_tiket });
    
        res.status(201).json({
          message: "Layanan created successfully",
          data: newUser,
        });
      } catch (error) {
        res.status(500).json({
          message: "Failed to create layanan",
          error: error.message,
        });
      }
    };


module.exports = {getLayanan, createLayanan};