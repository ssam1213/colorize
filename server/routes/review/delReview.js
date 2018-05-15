// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/reviews');

router.post('/review/*', model.delReview);

module.exports = router;