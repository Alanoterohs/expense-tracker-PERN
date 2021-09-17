const Router = require('express-promise-router');
const router = new Router();
const {
    getBalance,
 } = require('../controllers/Balance');

router.get('/', getBalance);


module.exports = router;