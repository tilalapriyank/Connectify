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
        links: [{ type: String, default: [] }], 
        isVerified: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
        timezone: { type: String, required: true },
        privacy: { type: String, enum: ["public", "private"], default: "public" },
        role: { type: String, enum: ["personal", "business", "creator"], default: "personal" }, 
        lastSeen: { type: Date, default: Date.now }, 
        followers: [{ type: Schema.Types.ObjectId, ref: "User" }], 
        following: [{ type: Schema.Types.ObjectId, ref: "User" }], 
    },
    { timestamps: true }
);

UserSchema.index({ userName: 1, email: 1 });

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
