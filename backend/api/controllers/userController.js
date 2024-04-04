const mongoose = require('mongoose');
const User = require('../models/userModel')

// GET
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1});
  res.status(200).json(users)
}

// // GET single
const getUser = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `User does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage})
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}

// CREATE
const createUser = async (req, res) => {
  const { name, role, username, email, password, coursesEnrolled } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push('name')
  }

  if (!role) {
    emptyFields.push('role')
  }

  if (!username) {
    emptyFields.push('username')
  }

  if (!email) {
    emptyFields.push('email')
  }

  if (!password) {
    emptyFields.push('password')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  try {
    const user = await User.create({ name, role, username, email, password, coursesEnrolled });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `User does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const user = await User.findOneAndDelete({_id: id});

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}


// UPDATE
const updateUser = async (req, res) => {
  const { id } = req.params;
  const errorMessage = `User does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: errorMessage});
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!user) {
    return res.status(404).json({ error: errorMessage })
  }

  res.status(200).json(user);
}

const addCourse = async (req, res) => {
  const { id } = req.params;
  const { courseId } = req.body;
  const errorMessage = `User does not exist: ${id}`;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: errorMessage });
    }

    // Check if already enrolled
    if (user.coursesEnrolled.includes(courseId)) {
      return res.status(400).json({ error: `User is already enrolled this course` })
    }

    user.coursesEnrolled.push(courseId);
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const removeCourse = async (req, res) => {
  const { id } = req.params;
  const { courseId } = req.body;
  const errorMessage = `User does not exist: ${id}`;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: errorMessage });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: errorMessage });
    }

    // Check if enrolled
    const index = user.coursesEnrolled.indexOf(courseId);
    if (index === -1) {
      return res.status(400).json({ error: 'Course is not enrolled' });
    }

    user.coursesEnrolled.splice(index, 1);
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  addCourse,
  removeCourse,
}