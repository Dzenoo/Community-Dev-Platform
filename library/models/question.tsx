import mongoose, { Schema, Document } from "mongoose";

export interface QuestionTypes extends Document {
  id: string;
  title: string;
  tags: string[];
  user: string;
  upvotes: string[];
  downvotes: string[];
  answers: string[];
  description: string;
  language?: string;
}

const QuestionSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [{ type: String, required: true }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    answers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        default: [],
      },
    ],
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export default Question;
