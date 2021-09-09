module.exports = (sequelize, Sequelize) => {
  const OperationsModel = sequelize.define('operaciones', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.FLOAT,
    },
    description: {
      type: Sequelize.STRING,
    },
    option: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
  });
  return OperationsModel;
};
