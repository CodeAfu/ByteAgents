const express = require('express')
const router = express.Router();

// GET all
router.get('/', (req, res) => {
  res.status(200).json({
    request: req.method
  });
});

// GET one
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).json({
    request: req.method,
    id : id
  });
});

// UPDATE
router.patch('/', (req, res) => {
  res.status(200).json({
    request: req.method
  });
});

// DELETE
router.delete('/', (req, res) => {
  res.status(200).json({
    request: req.method
  });
});

// POST
router.post('/', (req, res) => {
  res.status(200).json({
    request: req.method
  });
});

module.exports = router;