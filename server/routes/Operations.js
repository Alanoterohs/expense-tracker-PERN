const Router = require('express-promise-router');
const router = new Router();
const {
  createOperations,
  updateOperation,
  deleteOperation,
  lastTenOperations,
  getAllOperations,
 } = require('../controllers/Operations');

router.get('/', getAllOperations);
router.get('/lastOperations', lastTenOperations);
router.post('/', createOperations);
router.put('/:id', updateOperation);
router.delete('/:id', deleteOperation);

module.exports = router;
