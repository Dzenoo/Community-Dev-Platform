"use server";

import Answer from "../models/answer";
import Question from "../models/question";
import { revalidatePath } from "next/cache";
import { connectToDb } from "../mongoose";

export async function deleteAnswer(
  answerId: string | number,
  pathname: string
) {
  connectToDb();

  try {
    const answer = await Answer.findById(answerId);

    if (!answer) return;

    await Question.updateOne(
      {
        _id: answer?.question,
      },
      {
        $pull: { answers: answerId },
      }
    );
    await Answer.findByIdAndDelete(answerId);

    revalidatePath(pathname);
  } catch (error) {
    console.log(error);
  }
}
