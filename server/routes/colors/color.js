// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/color');

router.get('/', controller);

module.exports = router;
