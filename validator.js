const validateUser = (req, res, next) => {
  const { name, age, hobby } = req.body;

  if (!name || !age || !hobby) {
    return res.status(400).json({ error: 'name, age, and hobby are required.' });
  }

  next();
};

module.exports = validateUser;
