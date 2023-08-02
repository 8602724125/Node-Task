const express = require('express');
const router = express.Router();
const ArrayService = require('../../service/array')

router.post('/', ArrayService.sum);

module.exports = router;