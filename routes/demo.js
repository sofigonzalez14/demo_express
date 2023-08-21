const { Router } = require('express');
const {getDemo, getPrueba} = require('../controllers/demo');

const router = Router();


router.get('/prueba', getDemo)

router.get('/demo', getPrueba)

module.exports = router;