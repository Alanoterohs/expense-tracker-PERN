const { Operations } = require('../configDatabase/database');

//Create a income or expenses.
const createOperations = async (req, res) => {
  try {
    const { title, description, amount, option, category, date } = req.body;
    const newOperation = await Operations.create({
      title,
      description,
      amount,
      option,
      category,
      date,
    });

    res.status(200).json(newOperation);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

//Update a income or expenses
const updateOperation = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, amount, category, date } = req.body;
    const updatedOperation = await Operations.update(
      { title, description, amount, category, date },
      { where: { id } },
    );
    res.status(200).json({ message: 'operation updated' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

//Delete a income or expenses
const deleteOperation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOperation = await Operations.destroy({
      where: { id },
    });
    res.status(200).json({ message: 'movie deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const getAllOperations = async (req, res) => {
  try {
    const getOperations = await Operations.findAll({
          attributes: ['id', 'title', 'description', 'amount', 'option', 'category', 'date'],
        });
    res.status(200).json({ getOperations });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const lastTenOperations = async (req, res) => {
  try {
    const getOperations = await Operations.findAll({
          limit: 10,
          order: [
            ['id', 'DESC'],
          ],
          attributes: ['title', 'description', 'amount', 'category', 'date', 'option'],
        });
    res.status(200).json({ getOperations });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  createOperations,
  updateOperation,
  deleteOperation,
  lastTenOperations,
  getAllOperations,
};
