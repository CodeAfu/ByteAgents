const express = require('express')
const router = express.Router();
const {
  getPackages,
  getPackage,
  deletePackage,
  updatePackage,
  createPackage
} = require('../controllers/coursePackageController');

router.get('/', getPackages); // PATCH
router.get('/:id', getPackage); // PATCH
router.post('/', createPackage); // PATCH
router.delete('/:id', deletePackage); // PATCH
router.patch('/:id', updatePackage); // PATCH

module.exports = router;