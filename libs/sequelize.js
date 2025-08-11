const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models/index');

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: 'mysql',
    port: config.dbPort,
    logging: true, // Puedes poner true si quieres ver los logs de SQL
  }
);

setupModels(sequelize);


sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión con MySQL exitosa');
  })
  .catch(err => {
    console.error('❌ Error al conectar con MySQL:', err.message);
  });


module.exports = sequelize;
