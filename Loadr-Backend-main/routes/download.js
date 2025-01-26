const router = require('express').Router();
const DownloadController = require('../controllers/download');

router.get('/:link', DownloadController.downloadFile);

module.exports = router;
