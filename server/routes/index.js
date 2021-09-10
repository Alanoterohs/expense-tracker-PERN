const users = require('./Users');
const operations = require('./Operations');

module.exports = app => {
  app.use('/auth', users);
  app.use('/operations', operations);
};
