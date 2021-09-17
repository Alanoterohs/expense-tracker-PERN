const users = require('./Users');
const operations = require('./Operations');
const balance = require('./Balance');

module.exports = app => {
  app.use('/auth', users);
  app.use('/operations', operations);
  app.use('/balance', balance);
};
