const express = require('express');
const app = express();

const userRoutes = require('./users');
const logger = require('./logger'); // Path to your logger.js file

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use(logger); // Register the logger middleware

// Define routes
app.get('/', (req, res) => {
  res.send('Home Page');
});


// Mount userRoutes at /users and /user
app.use('/users', userRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
