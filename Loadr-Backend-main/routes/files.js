const router = require('express').Router();
const FileController = require('../controllers/file');
const FileUploader = require('../middleware/fileUploader');

router.get('/:link', FileController.getFile);
router.post('/', FileUploader, FileController.saveFile);

module.exports = router;
