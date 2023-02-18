const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.courses);
router.get('/trash/courses', meController.trash);

module.exports = router;
