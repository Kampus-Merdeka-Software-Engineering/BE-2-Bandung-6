const Customer = require('../models/customer');
const sequelize = require('../config/sequelize');
const Layanan = require('../model/layanan');

const createPemesanan = async (nama_lengkap, alamat_email, no_telepon, alamat, total_tiket, tanggal_pemesanan) => {
  let transaction;
  try {
    const status_pemesanan = 'belum disetujui';

    // Menghitung harga1 dan harga2
    const harga1 = beratToHarga(berat1);
    const harga2 = beratToHarga(berat2);

    const total_harga = harga1 + (nama_hewan2 ? harga2 : 0);

    // Tambahkan baris berikut untuk mendapatkan tanggal pemesanan saat ini
    const tanggal_pemesanan = new Date();

    transaction = await sequelize.transaction(); // Mulai transaksi

    const pemesanan = await Pemesanan.create(
      {
        nama_pelanggan,
        email,
        nomor_telepon,
        alamat_asal,
        alamat_tujuan,
        total_harga,
        tanggal_pemesanan,
        status_pemesanan,
        id_users: userId,
      },
      { transaction }
    );

    const detailPemesananHewan1 = await createDetailPemesanan(pemesanan.id, nama_hewan1, tipe_hewan1, berat1, harga1, transaction);

    let detailPemesananHewan2;
    if (nama_hewan2) {
      detailPemesananHewan2 = await createDetailPemesanan(pemesanan.id, nama_hewan2, tipe_hewan2, berat2, harga2, transaction);
    }

    const totalHargaDetailPemesanan = await DetailPemesanan.sum('harga', {
      where: { id_pemesanan: pemesanan.id },
      transaction,
    });

    // Update total harga di pemesanan sesuai dengan total harga detail pemesanan
    await Pemesanan.update({ total_harga: totalHargaDetailPemesanan }, { where: { id: pemesanan.id }, transaction });

    await transaction.commit(); // Commit transaksi jika semuanya berhasil

    return { pemesanan, detailPemesananHewan1, detailPemesananHewan2 };
  } catch (error) {
    console.error('Gagal membuat pemesanan:', error);

    // Rollback transaksi jika ada kesalahan
    if (transaction) {
      await transaction.rollback();
    }

    throw error;
  }
};

function beratToHarga(berat) {
  if (berat < 15) {
    return 75000;
  } else if (berat >= 15 && berat <= 80) {
    return 125000;
  } else {
    return 225000;
  }
}
