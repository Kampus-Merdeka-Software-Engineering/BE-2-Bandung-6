const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Buat database city
const Kota_travel = sequelize.define(
  'tbl_kota',
  {
    kota_asal_travel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_travel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_telepon_travel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gambar_travel: {
      type: DataTypes.STRING,
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
    console.log('Tabel kota telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Kota_travel;
