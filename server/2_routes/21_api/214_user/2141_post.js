// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const multerS3 = require('../../../6_utility/64_multer/642_multer-s3');
const controller = require('../../../5_controllers/51_api/514_user/5141_post');

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/upload', auth.user, multerS3);

module.exports = router;