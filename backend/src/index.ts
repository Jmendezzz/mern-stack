import 'express-async-errors'
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import jobRouter from "./routes/JobRouter.js";
import authRouter from "./routes/AuthRouter.js";
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 8000;
export const API_BASE_URL = '/api/v1';

const app = express();

app.use(express.json());

// Routes
app.use(`${API_BASE_URL}/jobs`,jobRouter);
app.use(`${API_BASE_URL}/auth`,authRouter);
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