"use server";
import { connectToDb } from "../mongoose";
import Question from "../models/question";
import User from "../models/user";
import Answer from "../models/answer";
import { revalidatePath } from "next/cache";
import { QuestionItemPropsTypes } from "@/types/questions";

// Function to post a new question
export async function postQuestion(
  title: string,
  tags: string[],
  userId: string,
  description: string,
  language: string | undefined,
  path: string
): Promise<void> {
  try {
    connectToDb();

    // Checking if required fields are filled
    if (!title || !tags || !description) throw new Error("Please fill fields");

    // Finding the user who posted the question
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Creating a new question and saving it to the database
    const question = await Question.create({
      title,
      tags,
      user,
      description,
      language: language || "",
    });
    await question.save();

    // Updating the user's information
    user.questions.push(question._id);
    user.bronzeBadges++;
    await user.save();

    // Revalidating the cache
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to fetch a question by its ID
export async function fetchQuestionById<Id extends string>(id: Id) {
  try {
    connectToDb();

    // Finding the question by its ID and populating the user and answers fields
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

// Function to answer a question
export async function answerOnQuestion<
  Uid extends string,
  Qid extends string,
  D extends string,
  L extends string | undefined
>(
  userId: Uid,
  questionId: Qid,
  description: D,
  language: L | undefined,
  path: string
): Promise<void> {
  connectToDb();

  try {
    // Finding the question and user
    const question = await Question.findById(questionId);
    const user = await User.findById(userId);

    if (!question || !user) return;

    // Creating a new answer and saving it to the database
    const createdAnswer = await Answer.create({
      user: userId,
      question: questionId,
      description,
      language: language || "",
    });

    // Updating the question and user information
    question.answers.push(createdAnswer._id);
    user.bronzeBadges++;

    await question.save();
    await user.save();
    await createdAnswer.save();

    // Revalidating the cache
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to fetch a user's answers
export async function fetchUserAnswers<Uid extends string>(
  userId: Uid
): Promise<any> {
  connectToDb();

  try {
    // Finding all answers by the user and populating the question field
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

// Function to delete a question
export async function deleteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  connectToDb();

  try {
    // Finding the question, user, and other users who saved the question
    const question = await Question.findById(questionId);
    const user = await User.findById(userId);
    const usersQuestions = await User.find({ savedQuestions: questionId });

    if (!question || !user) return;

    // Checking if the user who posted the question is the one deleting it
    if (question.user.toString() !== userId) {
      return;
    }

    // Deleting all answers associated with the question
    const answerIds = question.answers;
    if (answerIds.length > 0) {
      await Answer.deleteMany({ _id: { $in: answerIds } });
    }

    // Updating the user and other users' information
    user.questions.pull(questionId);

    if (user.bronzeBadges > 0) {
      user.bronzeBadges--;
    }
    await user.save();

    if (usersQuestions.length > 0) {
      usersQuestions.forEach(async (user) => {
        user.savedQuestions.pull(questionId);
        await user.save();
      });
    }

    // Deleting the question and revalidating the cache
    await Question.findByIdAndDelete(questionId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to vote on a question
async function voteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  voteType: "upvotes" | "downvotes",
  path: string
): Promise<void> {
  connectToDb();

  try {
    // Finding the question and user
    const question = await Question.findById(questionId);
    const user = await User.findById(question?.user);

    if (!question || !user || !userId) return;

    // Adding or removing the user's vote
    if (question[voteType].includes(userId)) {
      question[voteType].pull(userId);
      await question.save();
    } else {
      question[voteType].push(userId);
      await question.save();
    }

    // Updating the user's badge information
    if (question.upvotes.length >= 10) {
      user.bronzeBadges++;
    } else if (question.upvotes.length >= 25) {
      user.silverBadges++;
    } else if (question.upvotes.length >= 40) {
      user.goldBadges++;
    }

    await user.save();

    // Revalidating the cache
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to upvote a question
export async function upvoteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteQuestion(questionId, userId, "upvotes", path);
}

// Function to downvote a question
export async function downvoteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteQuestion(questionId, userId, "downvotes", path);
}

// Function to save a question to a user's collection
export async function saveToCollection<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
) {
  connectToDb();

  try {
    // Finding the user and adding or removing the question from their saved questions
    const user = await User.findById(userId);

    if (!user) return;

    if (user.savedQuestions.includes(questionId)) {
      user.savedQuestions.pull(questionId);
      await user.save();
    } else {
      user.savedQuestions.push(questionId);
      await user.save();
    }

    // Revalidating the cache
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to vote on an answer
export async function voteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  voteType: "upvotes" | "downvotes",
  path: string
): Promise<void> {
  connectToDb();

  try {
    // Finding the answer and user
    const answer = await Answer.findById(answerId);
    const user = await User.findById(answer?.user);

    if (!answer || !user || !userId) return;

    // Adding or removing the user's vote
    if (answer[voteType].includes(userId)) {
      answer[voteType].pull(userId);
      await answer.save();
    } else {
      answer[voteType].push(userId);
      await answer.save();
    }

    // Updating the user's badge information
    if (answer.upvotes.length >= 10) {
      user.bronzeBadges++;
    } else if (answer.upvotes.length >= 25) {
      user.silverBadges++;
    } else if (answer.upvotes.length >= 40) {
      user.goldBadges++;
    }

    await user.save();

    // Revalidating the cache
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

// Function to upvote an answer
export async function upvoteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteAnswer(answerId, userId, "upvotes", path);
}

// Function to downvote an answer
export async function downvoteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteAnswer(answerId, userId, "downvotes", path);
}

// Function to fetch questions by tag
export async function fetchQuestionByTag<Tag extends string | undefined>(
  tag: Tag
) {
  try {
    await connectToDb();

    // Finding all questions with the given tag and populating the user field
    const questions = await Question.find({
      tags: { $in: tag },
    }).populate("user", "username");

    return questions;
  } catch (error) {
    console.log(error);
  }
}

// Function to fetch all questions
export async function fetchQuestions<T extends string | undefined>(params?: T) {
  try {
    await connectToDb();

    let questions: QuestionItemPropsTypes[] = [];

    if (params) {
      const search = new RegExp(params, "i");

      // Finding all questions with the given search parameter and populating the user field
      questions = await Question.find({
        $or: [{ title: search }, { tags: { $in: search } }],
      }).populate("user", "username");
    } else {
      // Finding all questions and populating the user field
      questions = await Question.find({}).populate("user", "username");
    }

    return questions;
  } catch (error) {
    console.log(error);
  }
}
