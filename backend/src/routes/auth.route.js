import express from 'express';
import {signup, login, logout, updateProfile} from '../controllers/auth.controller.js';
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

// Authentication routes
router.post('/signup', signup);
// Login and logout routes
router.post('/login', login);
// Logout and logout routes
router.post('/logout', logout);

router.put('/update-profile', protectRoute, updateProfile);

// To check User is authenticated or not...
router.get('/check', protectRoute, (req, res) => res.status(200).json(req.user));

export default router;