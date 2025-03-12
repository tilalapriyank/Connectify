import { Document } from 'mongoose';

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
    link?: string;
    isVerified: boolean;
    isActive: boolean;
    isDeleted: boolean;
    timezone: string;
    followersCount: number; 
    followingCount: number;
    createdAt: Date;
    updatedAt: Date;
}
