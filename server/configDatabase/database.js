const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenseTracker', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

//connection to ddbb
sequelize.sync({ force: false, })
  .then(() => {
    console.log('connection ok');
  });
