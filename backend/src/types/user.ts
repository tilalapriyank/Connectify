import { Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    birthdate: Date;
    mobileNumber: number;
    avatar: string;
    bio?: string;
    links?: string[];
    isVerified: boolean;
    isActive: boolean;
    isDeleted: boolean;
    timezone: string;
    privacy: "public" | "private";
    role: "personal" | "business" | "creator";
    lastSeen: Date;
    followers: string[];
    following: string[];

    createdAt: Date;
    updatedAt: Date;
}
