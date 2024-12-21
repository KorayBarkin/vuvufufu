const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
