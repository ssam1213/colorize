// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/515_wishlist/5152_get/51521_list');

router.get('/list', auth.user, controller);

module.exports = router;