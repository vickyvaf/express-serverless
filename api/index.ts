// If you are using pnpm, make sure to install the types with:
// pnpm add -D @types/vercel__node

import { NowRequest, NowResponse } from "@vercel/node";
import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
// connectDB();

// Set up routes
// setRoutes(app);

export default (req: NowRequest, res: NowResponse) => {
  app(req, res);
};
