const express = require('express');
const app = express();

const userRoutes = require('./users');

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount userRoutes at /users and /user
app.use('/users', userRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
