const express = require('express')
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  getModules,
  addModule,
  removeModule,
} = require('../controllers/courseController');

router.get('/', getCourses); // GET ALL 
router.get('/:id', getCourse); // GET
router.post('/', createCourse); // POST
router.delete('/:id', deleteCourse); // DELETE
router.patch('/:id', updateCourse); // PATCH

router.get('/:id/modules', getModules) // GET MODULE
router.post('/:id/addModule', addModule); // PATCH
router.delete('/:id/removeModule', removeModule); // PATCH

module.exports = router;