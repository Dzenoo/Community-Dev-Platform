// Importing the Answer and Question models
import Answer from "../models/answer";
import Question from "../models/question";

// Importing the revalidatePath function from the next/cache module and the connectToDb function from the mongoose module
import { revalidatePath } from "next/cache";
import { connectToDb } from "../mongoose";

// Defining the deleteAnswer function that takes an answerId and a pathname as arguments
export async function deleteAnswer(
  answerId: string | number,
  pathname: string
) {
  // Connecting to the database
  connectToDb();

  try {
    // Finding the answer with the given answerId
    const answer = await Answer.findById(answerId);

    // If the answer doesn't exist, return
    if (!answer) return;

    // Updating the question that the answer belongs to by removing the answer from the answers array
    await Question.updateOne(
      {
        _id: answer?.question,
      },
      {
        $pull: { answers: answerId },
      }
    );

    // Deleting the answer with the given answerId
    await Answer.findByIdAndDelete(answerId);

    // Revalidating the cache for the given pathname
    revalidatePath(pathname);
  } catch (error) {
    // Logging any errors that occur
    console.log(error);
  }
}
