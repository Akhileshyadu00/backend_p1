const express = require('express');
const router = express.Router();

const users = [
  {
    id: "1",
    firstName: "Akhilesh",
    lastName: "Yadav",
    hobby: "Travelling"
  }
];

// GET /users - Get all users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id – Get user by ID
router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

// POST /user – Add new user
router.post('/', validateUser, (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
