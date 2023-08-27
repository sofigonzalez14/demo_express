const { Router } = require('express');
const {getDemo, getPrueba, getRender} = require('../controllers/demo');

const router = Router();


router.get('/prueba', getDemo)

router.get('/render', getRender)

router.get('/demo', getPrueba)

module.exports = router;