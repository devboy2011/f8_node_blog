const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-action', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.remove);
router.delete('/:id/forceDelete', courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;
