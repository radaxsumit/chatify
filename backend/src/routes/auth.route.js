import express from 'express';

const router = express.Router();

// Authentication routes
router.get('/signup', (req, res) => {
  res.send('SIGNUP endpoint');
});

// Login and logout routes
router.get('/login', (req, res) => {
  res.send('Login endpoint');
});


router.get('/logout', (req, res) => {
  res.send('logout endpoint');
});

export default router;