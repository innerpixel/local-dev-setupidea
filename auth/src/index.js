import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createLogger } from './utils/logger.js';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';

// Load environment variables
dotenv.config();

// Initialize logger
const logger = createLogger('app');

// Connect to MongoDB
connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGINS.split(','),
  credentials: true
}));

// Body parser
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'auth' });
});

app.use('/api/auth', authRoutes);

// Error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`Auth service running on port ${PORT}`);
});
