import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import webrtcRoutes from './routes/webrtcRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/webrtc', webrtcRoutes);

export default app;
