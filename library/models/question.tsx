import mongoose, { Schema, Document } from "mongoose";

export interface QuestionTypes extends Document {
  id: string;
  title: string;
  tags: { title: string }[];
  user: mongoose.Types.ObjectId; // Reference to the User who asked the question
  upvotes: mongoose.Types.ObjectId[];
  downvotes: mongoose.Types.ObjectId[];
  answers: mongoose.Types.ObjectId[]; // References to Answer documents
  description: string;
  language: string;
  views: mongoose.Types.ObjectId[];
}

const QuestionSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        title: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User schema
    },
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User schema
        default: [],
      },
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User schema
        default: [],
      },
    ],
    answers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer", // Reference to the Answer schema
        default: [],
      },
    ],
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    views: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the Answer schema
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export default Question;
