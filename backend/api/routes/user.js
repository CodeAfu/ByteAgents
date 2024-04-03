const express = require('express')
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  addCourse,
  removeCourse,
} = require('../controllers/userController');

router.get('/', getUsers); // GET ALL 
router.get('/:id', getUser); // GET
router.post('/', createUser); // POST
router.delete('/:id', deleteUser); // DELETE
router.patch('/:id', updateUser); // PATCH
router.post('/:id/addCourse', addCourse); // DELETE
router.delete('/:id/removeCourse', removeCourse); // PATCH

module.exports = router;