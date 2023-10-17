"use server";

import { connectToDb } from "../mongoose";
import Question from "../models/question";
import User from "../models/user";
import Answer from "../models/answer";

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

    const question = await Question.findById(id)
      .populate("user", "username")
      .populate({
        path: "answers",
        model: Answer,
        populate: {
          path: "user",
          model: User,
          select: "username",
        },
      });

    return question;
  } catch (error) {
    console.log(error);
  }
}

export async function answerOnQuestion<
  Uid extends string,
  Qid extends string,
  D extends string,
  L extends string
>(userId: Uid, questionId: Qid, description: D, language: L): Promise<void> {
  connectToDb();

  try {
    const question = await Question.findById(questionId);

    if (!question) return;

    const createdAnswer = await Answer.create({
      user: userId,
      question: questionId,
      description,
      language,
    });

    question.answers.push(createdAnswer._id);
    await question.save();
    await createdAnswer.save();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserAnswers<Uid extends string>(
  userId: Uid
): Promise<any> {
  connectToDb();

  try {
    const answers = await Answer.find({ user: userId }).populate({
      path: "question",
      model: Question,
      select: "title user description",
    });

    if (!answers) return;

    return answers;
  } catch (error) {
    console.log(error);
  }
}

// Edit questions actions

export async function deleteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid
): Promise<void> {
  connectToDb();

  try {
    const question = await Question.findById(questionId);
    const user = await User.findById(userId);

    if (!question || !user) return;

    if (question.user.toString() !== userId) {
      return;
    }

    const answerIds = question.answers;
    if (answerIds.length > 0) {
      await Answer.deleteMany({ _id: { $in: answerIds } });
    }

    user.questions.pull(questionId);
    await user.save();

    await Question.findByIdAndDelete(questionId);
  } catch (error) {
    console.log(error);
  }
}
