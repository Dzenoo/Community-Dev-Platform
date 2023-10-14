import mongoose, { Schema, Document } from "mongoose";

export interface UserTypes extends Document {
  firstName: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First name is required"],
    },
    username: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<UserTypes>("User", UserSchema);

export default User;
