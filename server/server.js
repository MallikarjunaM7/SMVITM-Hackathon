import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import routes from './routes/index.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is healthy' });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

