const express = require('express');

const router = express.Router();

const peopleRouter = require('./people.router');
const tasksRouter = require('./tasks.router');

router.use(peopleRouter);
router.use(tasksRouter);

module.exports = router;