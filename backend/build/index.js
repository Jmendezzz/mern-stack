import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;
export const API_BASE_URL = '/api/v1';
import jobRouter from "./routes/JobRouter.js";
const app = express();
app.use(express.json());
app.use(jobRouter);
app.use("*", (req, res) => {
    res.status(404).send('The resource was not found');
});
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
