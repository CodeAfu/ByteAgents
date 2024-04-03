const express = require('express')
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} = require('../controllers/courseController');

router.get('/', getCourses); // GET ALL 
router.get('/:id', getCourse); // GET
router.post('/', createCourse); // POST
router.delete('/:id', deleteCourse); // DELETE
router.patch('/:id', updateCourse); // PATCH

module.exports = router;