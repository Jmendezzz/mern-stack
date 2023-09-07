import 'express-async-errors'
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

// Routers
import jobRouter from "./routes/JobRouter.js";
import authRouter from "./routes/AuthRouter.js";
import userRouter from "./routes/UserRouter.js";
import statsRouter from "./routes/StatsRouter.js";

// Middleware
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware.js';
import { authenticateUser } from './middlewares/AuthMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 8000;
export const API_BASE_URL = '/api/v1';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use(`${API_BASE_URL}/jobs`,authenticateUser,jobRouter);
app.use(`${API_BASE_URL}/auth`,authRouter);
app.use(`${API_BASE_URL}/users`,authenticateUser,userRouter);
app.use(`${API_BASE_URL}/stats`,authenticateUser, statsRouter);

app.use("*",(req,res)=>{
  res.status(404).send('The resource was not found');
});
app.use(errorHandlerMiddleware);

const MONGO_URL  =  process.env.MONGO_URL;
try{
  await mongoose.connect(MONGO_URL as string);
  app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
  });
}catch(error){
  console.log(error)
}