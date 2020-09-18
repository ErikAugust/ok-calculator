'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const expensesRouter = require('./routes/expenses');

const app = express();

// View engine setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routing
 */
app.use('/', indexRouter);
app.use('/expenses', expensesRouter);

/**
 * Error Handling
 */

// Catch 404 and forward to error handler
app.use(async (request, response, next) => {
  next(createError(404));
});

// Error handler
app.use((error, request, response, next) => {
  console.error('An error has occurred')
  console.error(error);

  response.status(error.status || 500);
  return response.json( { message: error.message })
});

module.exports = app;
