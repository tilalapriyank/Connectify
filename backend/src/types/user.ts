import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    birthdate: Date;
    mobileNumber: string; 
    avatar: string;
    bio?: string;
    links?: string[];
    gender?: "male" | "female" | "other"; 
    isVerified: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isDisabled?: boolean; 
    timezone: string;
    privacy: "public" | "private";
    role: "personal" | "business" | "creator";
    lastSeen: Date;
    followers: Schema.Types.ObjectId[]; 
    following: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
