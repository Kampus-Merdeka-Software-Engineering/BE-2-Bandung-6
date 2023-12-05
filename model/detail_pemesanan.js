const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Layanan = require('./layanan');
const Kota_travel = require('./kota');
const Data_penumpang = require('./data_penumpang')

// Buat database detail pemesan
const Detail_pemesanan = sequelize.define(
  'tbl_detail',
  {
    id_detail: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    kota_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Kota_travel,
        key: 'id_kota',
      },
    },
    penumpang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Data_penumpang,
          key: 'id_penumpang',
        },
      },
    layanan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Layanan,
        key: 'id_layanan',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
// FK kota
Kota_travel.hasMany(Detail_pemesanan, { foreignKey: 'id_kota' });
Detail_pemesanan.belongsTo(Kota_travel, { foreignKey: 'id_kota' });

//Fk Layanan
Layanan.hasMany(Detail_pemesanan, { foreignKey: 'id_layanan' });
Detail_pemesanan.belongsTo(Layanan, { foreignKey: 'id_layanan' });

//fk Data Penumpang
Data_penumpang.hasMany(Detail_pemesanan, { foreignKey: 'id_penumpang' });
Detail_pemesanan.belongsTo(Data_penumpang, { foreignKey: 'id_penumpang' });



sequelize
  .sync()
  .then(() => {
    console.log('Tabel detail pemesanan telah berhasil dibuat atau sudah ada.');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan saat mencoba membuat tabel:', error);
  });

module.exports = Kota_travel;
