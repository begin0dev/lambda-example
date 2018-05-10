const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', `${env}.json`));
const index = {};

const { database, username, password, options } = config.mysql;

const sequelize = new Sequelize(database, username, password, options);

index.sequelize = sequelize;
index.Sequelize = Sequelize;

// models auto setting
fs.readdirSync(path.join(__dirname)).filter((file) => { return (file.indexOf('.') !== 0) && (file !== 'index.js'); }).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  index[model.name] = model;
});

Object.keys(index).forEach((modelName) => {
  const model = index[modelName];
  if (model.associate) {
    model.associate(index);
  }
});

module.exports = index;
