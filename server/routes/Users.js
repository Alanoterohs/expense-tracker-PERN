const Router = require('express-promise-router');
const router = new Router();
const { register, login } = require('../controllers/Users');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
