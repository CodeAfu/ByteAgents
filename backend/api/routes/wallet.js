const express = require('express')
const router = express.Router();
const {
  getWallets,
  getWallet,
  createWallet,
  deleteWallet,
  updateWallet
} = require('../controllers/walletController');

// LOGIC PROBABLY VERY DIFFERENT HERE
router.get('/', getWallets); // GET ALL 
router.get('/:id', getWallet); // GET
router.post('/', createWallet); // POST
router.delete('/:id', deleteWallet); // DELETE
router.patch('/:id', updateWallet); // PATCH

module.exports = router;