'use strict'

const express = require('express');

const router = new express.Router();

const DirectoryController = require('../controllers/DirectoryController');

router.get('/dir',DirectoryController.getListing);

module.exports = router;