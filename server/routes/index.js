// Main routes file
// Import and export all routes here

import express from 'express';
const router = express.Router();

// Example: Import route modules
// import userRoutes from './userRoutes.js';
// import authRoutes from './authRoutes.js';

// Example: Use route modules
// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'API Routes' });
});

export default router;

