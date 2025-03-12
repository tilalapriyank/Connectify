import express from "express";
import connectDB from "./config/db";
import auth from "./routes/auth";

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", auth);

app.listen(5000, () => console.log("Server running on port 5000"));
