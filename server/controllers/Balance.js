const { Operations } = require('../configDatabase/database');


const getBalance = async (req, res) => {
  try {
    const getExpenses =  await Operations.sum('amount', { where: { option: 'gastos' } });

    const getIncomes = await Operations.sum('amount', { where: { option: 'ingresos' } });

    let total = getIncomes - getExpenses;

    res.status(200).json(total);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};
  

module.exports = {
    getBalance,
}