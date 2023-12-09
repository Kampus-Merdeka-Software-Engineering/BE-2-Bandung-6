const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'mysql',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Database Terhubung');
  })
  .catch((err) => {
    console.error('Database Tidak Terhubung:', err);
  });
module.exports = sequelize;
