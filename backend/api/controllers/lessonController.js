const mongoose = require('mongoose');
const Lesson = require('../models/lessonModel')

// GET
const getLessons = async (req, res) => {
  const lessons = await Lesson.find({}).sort({createdAt: -1});
  res.status(200).json(lessons)
}

// // GET single
const getLesson = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Lesson does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage})
  }

  const lesson = await Lesson.findById(id);

  if (!lesson) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(lesson);
}

// CREATE
const createLesson = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const lesson = await Lesson.create({ name, email, password });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteLesson = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Lesson does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const lesson = await Lesson.findOneAndDelete({_id: id});

  if (!lesson) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(lesson);
}


// UPDATE
const updateLesson = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Lesson does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const lesson = await Lesson.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!lesson) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(lesson);
}

module.exports = {
  getLessons,
  getLesson,
  createLesson,
  deleteLesson,
  updateLesson
}