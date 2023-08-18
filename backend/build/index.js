import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT || 8000;
export const API_BASE_URL = '/api/v1';
import jobRouter from "./routes/JobRouter.js";
const app = express();
app.use(express.json());
app.use(`${API_BASE_URL}/jobs`, jobRouter);
app.use("*", (req, res) => {
    res.status(404).send('The resource was not found');
});
const MONGO_URL = process.env.MONGO_URL;
try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
        console.log("Server is running on port: " + PORT);
    });
}
catch (error) {
    console.log(error);
}
