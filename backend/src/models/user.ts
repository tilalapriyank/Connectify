import { Schema, model } from "mongoose";
import { IUser } from "../types/user";

const UserSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        birthdate: { type: Date, required: true },
        mobileNumber: { type: Number, required: true, unique: true },
        avatar: { type: String, default: "" },
        bio: { type: String, default: "" },
        link: { type: String, default: "" },
        isVerified: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
        timezone: { type: String, required: true },
        followersCount: { type: Number, default: 0 }, 
        followingCount: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;