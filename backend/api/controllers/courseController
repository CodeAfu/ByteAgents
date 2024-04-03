const mongoose = require('mongoose');
const Course = require('../models/courseModel')

// GET
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({createdAt: -1});
  res.status(200).json(courses)
}

// // GET single
const getCourse = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Course does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage})
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}

// CREATE
const createCourse = async (req, res) => {
  const { name, details, lessons, progress } = req.body;

  try {
    const course = await Course.create({ name, details, lessons, progress });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Course does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const course = await Course.findOneAndDelete({_id: id});

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}


// UPDATE
const updateCourse = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Course does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const course = await Course.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse
}