const mongoose = require('mongoose');
const Lesson = require('../models/moduleModel')

// GET
const getModules = async (req, res) => {
  const lessons = await Lesson.find({}).sort({createdAt: -1});
  res.status(200).json(lessons)
}

// // GET single
const getModule = async (req, res) => {
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
const createModule = async (req, res) => {
  const { title, description, moduleNumber, timeToComplete, contents } = req.body;

  try {
    const lesson = await Lesson.create({ title, description, moduleNumber, timeToComplete, contents });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteModule = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Module does not exist: ${id}`;

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
const updateModule = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Module does not exist: ${id}`;

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
  getModules,
  getModule,
  createModule,
  deleteModule,
  updateModule
}