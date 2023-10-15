"use server";

import { connectToDb } from "../mongoose";
import Question from "../models/question";
import User from "../models/user";

export async function postQuestion(
  title: string,
  tags: { title: string }[],
  userId: string,
  description: string,
  language: string
): Promise<void> {
  try {
    connectToDb();

    if (!title || !tags || !description || !language)
      throw new Error("Please fill fields");

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const question = await Question.create({
      title,
      tags,
      user,
      description,
      language,
    });
    await question.save();

    user.questions.push(question._id);
    await user.save();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchQuestions() {
  try {
    connectToDb();

    const questions = await Question.find({}).populate("user", "username");

    return questions;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchQuestionById(id: string) {
  try {
    connectToDb();

    const question = await Question.findById(id).populate("user", "username");

    return question;
  } catch (error) {
    console.log(error);
  }
}
