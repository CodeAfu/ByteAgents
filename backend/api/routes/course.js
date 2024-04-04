const express = require('express')
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  addModule,
  removeModule
} = require('../controllers/courseController');

router.get('/', getCourses); // GET ALL 
router.get('/:id', getCourse); // GET
router.post('/', createCourse); // POST
router.delete('/:id', deleteCourse); // DELETE
router.patch('/:id', updateCourse); // PATCH

router.get('/getModules') // GET ALL MODULES
router.get('/:id/modules') // GET MODULE
router.post('/:id/addModule', addModule); // PATCH
router.delete('/:id/removeModule', removeModule); // PATCH

module.exports = router;