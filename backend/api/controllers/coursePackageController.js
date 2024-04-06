const mongoose = require('mongoose');
const Package = require('../models/coursePackageModel');

// GET
const getPackages = async (req, res) => {
  const courses = await Package.find({}).populate('courses').sort({createdAt: -1});
  res.status(200).json(courses)
}

// // GET single
const getPackage = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Package does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage})
  }

  const course = await Package.findById(id).populate('modules');

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}

// CREATE
const createPackage = async (req, res) => {
  const { name, courses, imageUrl } = req.body;

  try {
  const course = await Package.create({ name, courses, imageUrl });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deletePackage = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Package does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const course = await Package.findOneAndDelete({_id: id});

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}


// UPDATE
const updatePackage = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Package does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const course = await Package.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}

module.exports = {
  getPackages,
  getPackage,
  deletePackage,
  updatePackage,
  createPackage
}