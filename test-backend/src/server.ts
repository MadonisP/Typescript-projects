import mongoose from 'mongoose';
import dotenv from "dotenv";
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import gameRoute from './routes/gameRoute';
dotenv.config();

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors())

// here we will declare the routes paths
app.use("/api/games", gameRoute);

const port = 5000;
const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://MadonisP:iki002Mm@quizapp.eusnci7.mongodb.net/msiDaily?retryWrites=true&w=majority");
        console.log("Connected to db ✅");
        app.listen(port, () => console.log("Server running on port", port));
    } catch (error) {
        console.log("Failed to connect to the db ❌" + port);
        console.log(error);
    }
}

startServer();