const express = require('express');
const router = express.Router();

const validateUser = require('./validator');

const users = [
  {
    id: "1",
    firstName: "Akhilesh",
    lastName: "Yadav",
    hobby: "Travelling"
  }
];

// GET /users - Get all users
router.get('/', validateUser, (req, res) => {
  res.status(200).json(users);
});


// GET /users/:id – Get user by ID
router.get('/:id', validateUser,(req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

// POST /user – Add new user
router.post('/',validateUser, (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});


// PUT /user/:id – Update existing user
router.put('/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.hobby = req.body.hobby;

  res.status(200).json(user);
});



// DELETE /user/:id – Delete user
router.delete('/:id', (req, res) => {
  const index = users.findIndex(user => user.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(index, 1);
  res.status(200).json({ message: 'User deleted successfully' });
});

module.exports = router;
