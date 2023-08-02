const express = require('express');
const router = express.Router();
const FileService = require('../../service/file')

router.get('/', FileService.count);

module.exports = router;