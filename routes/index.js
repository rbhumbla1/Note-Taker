const express = require('express');

// Import modular router for /notes
const notesRouter = require('./notes');

const app = express();

// Initialize diagnostics route
app.use('/notes', notesRouter)

module.exports = app;
