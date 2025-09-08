import { NowRequest, NowResponse } from '@vercel/node';
import express from 'express';
import { connectDB } from '../src/config/database';
import { setRoutes } from '../src/routes/index';

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Set up routes
setRoutes(app);

export default (req: NowRequest, res: NowResponse) => {
  app(req, res);
};