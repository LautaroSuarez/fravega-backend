const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas públicas
router.post('/register', registerUser);
router.post('/login', loginUser);

// Ruta protegida
router.get('/profile', authMiddleware, getProfile);

module.exports = router;

