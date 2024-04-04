const express = require('express')
const router = express.Router();
const {
  getModules,
  getModule,
  createModule,
  deleteModule,
  updateModule
} = require('../controllers/moduleController');

router.get('/', getModules); // GET ALL 
router.get('/:id', getModule); // GET
router.post('/', createModule); // POST
router.delete('/:id', deleteModule); // DELETE
router.patch('/:id', updateModule); // PATCH

module.exports = router;