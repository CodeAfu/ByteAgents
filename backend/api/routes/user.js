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
router.patch('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).json({
    request: req.method,
    id : id
  });
});

// DELETE
router.delete('/:id', (req, res) => {
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