const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Layanan = require('./layanan');
const Kota_travel = require('./kota');
const Data_penumpang = require('./data_penumpang')

// Buat database detail pemesan
const Detail_pemesanan = sequelize.define(
  'tbl_detail',
  {
    kota_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Kota_travel,
        key: 'id_kota',
      },
    },
    layanan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Layanan,
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
// FK kota
Kota_travel.hasMany(Detail_pemesanan, { foreignKey: 'kota_id' });
Detail_pemesanan.belongsTo(Kota_travel, { foreignKey: 'kota_id' });

//Fk Layanan
Layanan.hasMany(Detail_pemesanan, { foreignKey: 'layanan_id' });
Detail_pemesanan.belongsTo(Layanan, { foreignKey: 'layanan_id' });




sequelize
  .sync()
  .then(() => {
    console.log('Tabel detail pemesanan telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Kota_travel;
