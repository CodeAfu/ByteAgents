const mongoose = require('mongoose');
const Wallet = require('../models/walletModel')

// GET
const getWallets = async (req, res) => {
  const users = await Wallet.find({}).sort({createdAt: -1});
  res.status(200).json(users)
}

// // GET single
const getWallet = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Wallet does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage})
  }

  const user = await Wallet.findById(id);

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}

// CREATE
const createWallet = async (req, res) => {
  const { name, role, username, email, password, coursesEnrolled } = req.body;

  try {
    const user = await Wallet.create({ name, role, username, email, password, coursesEnrolled });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteWallet = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Wallet does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const user = await Wallet.findOneAndDelete({_id: id});

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}


// UPDATE
const updateWallet = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Wallet does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const user = await Wallet.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}

module.exports = {
  getWallets,
  getWallet,
  createWallet,
  deleteWallet,
  updateWallet
}