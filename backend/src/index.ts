import express from "express";
import connectDB from "./config/db";
import auth from "./routes/auth";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://192.168.1.19:5173", 
        methods: "GET,POST,PUT,DELETE", 
        allowedHeaders: "Content-Type,Authorization",
        credentials: true, 
    })
);

app.use(express.json());

connectDB();

app.use("/api/auth", auth);

app.listen(5000, () => console.log("Server running on port 5000"));
