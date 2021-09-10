const Sequelize = require('sequelize');
const UsersModel = require('../models/Users');
const OperationsModel = require('../models/Operations');

const sequelize = new Sequelize('expenseTracker', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UsersModel(sequelize, Sequelize);
const Operations = OperationsModel(sequelize, Sequelize);

//connection to ddbb
sequelize.sync({ force: false, })
  .then(() => {
    console.log('connection ok');
  });

module.exports = {
  User,
  Operations,
};
