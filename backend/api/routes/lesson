const express = require('express')
const router = express.Router();
const {
  getLessons,
  getLesson,
  createLesson,
  deleteLesson,
  updateLesson
} = require('../controllers/lessonController');

router.get('/', getLessons); // GET ALL 
router.get('/:id', getLesson); // GET
router.post('/', createLesson); // POST
router.delete('/:id', deleteLesson); // DELETE
router.patch('/:id', updateLesson); // PATCH

module.exports = router;