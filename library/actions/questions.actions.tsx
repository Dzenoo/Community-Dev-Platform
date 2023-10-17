"use server";

import { connectToDb } from "../mongoose";
import Question from "../models/question";
import User from "../models/user";
import Answer from "../models/answer";
import { revalidatePath } from "next/cache";

export async function postQuestion(
  title: string,
  tags: { title: string }[],
  userId: string,
  description: string,
  language: string,
  path: string
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

    revalidatePath(path);
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
>(
  userId: Uid,
  questionId: Qid,
  description: D,
  language: L,
  path: string
): Promise<void> {
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

    revalidatePath(path);
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
  userId: Uid,
  path: string
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

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Create action to upvote and downvote questions

async function voteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  voteType: "upvotes" | "downvotes",
  path: string
): Promise<void> {
  connectToDb();

  try {
    const question = await Question.findById(questionId);

    if (!question) return;

    if (question[voteType].includes(userId)) {
      question[voteType].pull(userId);
      await question.save();
    } else {
      question[voteType].push(userId);
      await question.save();
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function upvoteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteQuestion(questionId, userId, "upvotes", path);
}

// Downvote question action

export async function downvoteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteQuestion(questionId, userId, "downvotes", path);
}

// Save to collection action

export async function saveToCollection<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
) {
  connectToDb();

  try {
    const user = await User.findById(userId);

    if (!user) return;

    if (user.savedQuestions.includes(questionId)) {
      user.savedQuestions.pull(questionId);
      await user.save();
    } else {
      user.savedQuestions.push(questionId);
      await user.save();
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
