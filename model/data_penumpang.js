const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Buat database customer
const Data_penumpang = sequelize.define(
  'tbl_data_penumpang',
  {
    id_penumpang: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nama_lengkap: {
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
    jumlah_tiket: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggal_pemesanan: {
      type: DataTypes.DATE,
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
    console.log('Tabel data penumpang telah berhasil dibuat.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Data_penumpang;
