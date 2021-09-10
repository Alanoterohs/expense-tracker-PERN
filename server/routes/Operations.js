const Router = require('express-promise-router');
const router = new Router();
const {
  createOperations,
  updateOperation,
  deleteOperation, } = require('../controllers/Operations');

//const auth = require('../utils/auth');

router.post('/', createOperations);
router.put('/:id', updateOperation);
router.delete('/:id', deleteOperation);

module.exports = router;
