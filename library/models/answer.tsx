import mongoose, { Schema, Document } from "mongoose";

export interface AnswerTypes extends Document {
  user: mongoose.Types.ObjectId;
  question: mongoose.Types.ObjectId;
  description: string;
  language: string;
  upvotes: string[];
  downvotes: string[];
}

const AnswerSchema: Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Question",
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
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
});

const Answer = mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);

export default Answer;
