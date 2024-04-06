const mongoose = require('mongoose');
const Course = require('../models/courseModel');
const Module = require('../models/moduleModel');

// GET
const getCourses = async (req, res) => {
  const courses = await Course.find({}).populate('modules').sort({createdAt: -1});
  res.status(200).json(courses)
}

const getCoursesPacked = async (req, res) => {
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

  const course = await Course.findById(id).populate('modules');

  if (!course) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(course);
}

// CREATE
const createCourse = async (req, res) => {
  const { name, details, price, duration, skills, studentTotal, studentCurrent, modules } = req.body;

  try {
    const course = await Course.create({ name, details, duration, price, skills, studentTotal, studentCurrent, modules });
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

const getModules = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `Module does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Course does not exist" });
  }

  try {
    const course = await Course.findById(id).populate('modules');

    if (!course) {
      return res.status(404).json({ error: "Course does not exist" });
    }

    const modules = course.modules;

    res.status(200).json({ modules });

  } catch(error) {
    res.status(500).json({ error: err.message });
  }
}

const addModule = async (req, res) => {
  const { id } = req.params;
  const { id: moduleId } = req.body;
  const errorMessage = `Course does not exist`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage });
  }

  try {
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ error: errorMessage });
    }

    // Check if already enrolled
    const module = await Module.findById(moduleId);
    if (!module) {
      return res.status(404).json({ error: `Module does not exist: ${moduleId}` });
    }

    if (course.modules.includes(moduleId)) {
      return res.status(400).json({ error: `Module already exists: ${moduleId}` })
    }    

    course.modules.push(moduleId);

    await course.save();
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const removeModule = async (req, res) => {
  const { id } = req.params;
  const { id: moduleId } = req.body;
  const errorMessage = `Could not remove module from course: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage });
  }

  try {
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ error: errorMessage });
    }

    const index = course.modules.indexOf(moduleId);
    if (index === -1) {
      return res.status(404).json({ error: `Module does not exist in course: ${moduleId}` });
    }

    // Remove the module from the course's modules array
    course.modules.splice(index, 1);
    await course.save();

    return res.status(200).json({ message: "Module removed from course successfully" });

  } catch(error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getCourses,
  getCoursesPacked,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  getModules,
  addModule,
  removeModule
}