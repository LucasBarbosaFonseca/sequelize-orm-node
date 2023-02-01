const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../database/models/User');
const Address = require('../database/models/Address')
const Tech = require('../database/models/Tech')

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;