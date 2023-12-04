const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Buat database customer
const Layanan = sequelize.define(
  'tbl_layanan',
  {
    id_layanan: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    kota_asal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota_tujuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_keberangkatan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jam_keberangkatan: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    batas_tiket: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga_tiket: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log('Tabel layanan telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Layanan;
