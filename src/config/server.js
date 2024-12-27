import express from 'express';
import connectDB from '../database/database.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Database Connection
await connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('Chat App is running!');
});

export default app;