const express = require('express');
const router = express.Router();

router.use('/array', require('./problem02/array'))

router.use('/file', require('./problem03/file'))


module.exports = router