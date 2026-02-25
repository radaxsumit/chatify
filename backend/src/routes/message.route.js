import express from "express";

const router = express.Router();

// Message routes
router.get('/send', (req, res) => {
  res.send('Get all messages');
});

export default router;