const router = require('express').Router();
const SendController = require('../controllers/send');

router.post('/', SendController.send);

module.exports = router;
