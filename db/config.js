const { config } = require('../config/config');



module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'mysql',
    port: config.dbPort
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'mysql',
    port: config.dbPort
  }
};
