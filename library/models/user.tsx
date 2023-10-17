import mongoose, { Schema, Document } from "mongoose";
import { QuestionTypes } from "./question";

export interface UserTypes extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  location: string;
  biography: string;
  portfolio: string;
  questions: QuestionTypes[];
  savedQuestions: string[];
  goldBadges: number;
  silverBadges: number;
  bronzeBadges: number;
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
    location: {
      type: String,
    },
    biography: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    goldBadges: {
      type: Number,
      default: 0,
    },
    silverBadges: {
      type: Number,
      default: 0,
    },
    bronzeBadges: {
      type: Number,
      default: 0,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        default: [],
      },
    ],
    savedQuestions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<UserTypes>("User", UserSchema);

export default User;
