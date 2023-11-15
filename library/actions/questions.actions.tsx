"use server";
import { connectToDb } from "../mongoose";
import Question from "../models/question";
import User from "../models/user";
import Answer from "../models/answer";
import { revalidatePath } from "next/cache";
import { QuestionItemPropsTypes } from "@/types/questions";

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

    if (!title || !tags || !description) throw new Error("Please fill fields");

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const question = await Question.create({
      title,
      tags,
      user,
      description,
      language: language || "",
    });
    await question.save();

    user.questions.push(question._id);
    user.bronzeBadges++;
    await user.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchQuestionById<Id extends string>(id: Id) {
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
    const question = await Question.findById(questionId);
    const user = await User.findById(userId);

    if (!question || !user) return;

    const createdAnswer = await Answer.create({
      user: userId,
      question: questionId,
      description,
      language: language || "",
    });

    question.answers.push(createdAnswer._id);
    user.bronzeBadges++;

    await question.save();
    await user.save();
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

export async function deleteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  connectToDb();

  try {
    const question = await Question.findById(questionId);
    const user = await User.findById(userId);
    const usersQuestions = await User.find({ savedQuestions: questionId });

    if (!question || !user) return;

    if (question.user.toString() !== userId) {
      return;
    }

    const answerIds = question.answers;
    if (answerIds.length > 0) {
      await Answer.deleteMany({ _id: { $in: answerIds } });
    }

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

    await Question.findByIdAndDelete(questionId);

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

async function voteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  voteType: "upvotes" | "downvotes",
  path: string
): Promise<void> {
  connectToDb();

  try {
    const question = await Question.findById(questionId);
    const user = await User.findById(question?.user);

    if (!question || !user || !userId) return;

    if (question[voteType].includes(userId)) {
      question[voteType].pull(userId);
      await question.save();
    } else {
      question[voteType].push(userId);
      await question.save();
    }

    if (question.upvotes.length >= 10) {
      user.bronzeBadges++;
    } else if (question.upvotes.length >= 25) {
      user.silverBadges++;
    } else if (question.upvotes.length >= 40) {
      user.goldBadges++;
    }

    await user.save();

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

export async function downvoteQuestion<Qid extends string, Uid extends string>(
  questionId: Qid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteQuestion(questionId, userId, "downvotes", path);
}

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

export async function voteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  voteType: "upvotes" | "downvotes",
  path: string
): Promise<void> {
  connectToDb();

  try {
    const answer = await Answer.findById(answerId);
    const user = await User.findById(answer?.user);

    if (!answer || !user || !userId) return;

    if (answer[voteType].includes(userId)) {
      answer[voteType].pull(userId);
      await answer.save();
    } else {
      answer[voteType].push(userId);
      await answer.save();
    }

    if (answer.upvotes.length >= 10) {
      user.bronzeBadges++;
    } else if (answer.upvotes.length >= 25) {
      user.silverBadges++;
    } else if (answer.upvotes.length >= 40) {
      user.goldBadges++;
    }

    await user.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function upvoteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteAnswer(answerId, userId, "upvotes", path);
}

export async function downvoteAnswer<Aid extends string, Uid extends string>(
  answerId: Aid,
  userId: Uid,
  path: string
): Promise<void> {
  await voteAnswer(answerId, userId, "downvotes", path);
}

export async function fetchQuestionByTag<Tag extends string | undefined>(
  tag: Tag
) {
  try {
    await connectToDb();

    const questions = await Question.find({
      tags: { $in: tag },
    }).populate("user", "username");

    return questions;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchQuestions<T extends string | undefined>(params?: T) {
  try {
    await connectToDb();

    let questions: QuestionItemPropsTypes[] = [];

    if (params) {
      const search = new RegExp(params, "i");

      questions = await Question.find({
        $or: [{ title: search }, { tags: { $in: search } }],
      }).populate("user", "username");
    } else {
      questions = await Question.find({}).populate("user", "username");
    }

    return questions;
  } catch (error) {
    console.log(error);
  }
}
