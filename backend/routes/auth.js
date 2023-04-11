const express = require('express').Router()
const authController = require('../controllers/authController')

express.post("/register", authController.registerUser);

module.exports = express;

