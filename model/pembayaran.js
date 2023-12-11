const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


// Buat database city
const Pembayaran = sequelize.define(
  'tbl_pembayaran',
  {
    metode_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bukti_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// Fk Pembayaran

sequelize
  .sync()
  .then(() => {
    console.log('Tabel pembayaran telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Pembayaran;
