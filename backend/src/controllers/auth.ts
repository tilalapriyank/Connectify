import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user";
import catchAsync from "../utils/catchAsync";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const register = catchAsync(async (req: Request, res: Response) => {
    const { firstName, lastName, userName, email, password, birthdate, mobileNumber, timezone } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
        birthdate,
        mobileNumber,
        timezone,
        isVerified: false,
    });

    res.status(201).json({
        message: "User registered successfully",
        type: "success"
    });
});

export const checkUsername = catchAsync(async (req: Request, res: Response) => {

    const { userName } = req.body;

    const user = await UserModel.findOne({ userName });

    if (user) {
        return res.status(200).json({ available: false });
    }

    res.status(200).json({ available: true });
});

export const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
        message: "Login successful",
        type: "success",
        token,
        user: {
            userName: user.userName,
            email: user.email,
            role: user.role,
            privacy: user.privacy
        }
    });
});
