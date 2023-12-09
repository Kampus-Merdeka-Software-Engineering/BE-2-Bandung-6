const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Detail_pemesanan = require('./detail_pemesanan');

// Buat database city
const Pembayaran = sequelize.define(
  'tbl_pembayaran',
  {
    id_pembayaran: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    metode_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Detail_pemesanan,
        key: 'id_deta',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// Fk Pembayaran
Detail_pemesanan.hasMany(Pembayaran, { foreignKey: 'id_detail' });
Pembayaran.belongsTo(Detail_pemesanan, { foreignKey: 'id_detail' });

sequelize
  .sync()
  .then(() => {
    console.log('Tabel pembayaran telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Kota_travel;
