const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Buat database customer
const Customer = sequelize.define(
  'customers',
  {
    nama_depan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_belakang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_telepon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alamat: {
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
    console.log('Tabel telah berhasil dibuat.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Customer;
 