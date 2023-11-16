// Importing types and dependencies
import { QuestionItemPropsTypes } from "@/types/questions";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

// Function to generate question actions data
export function generateQuestionActionsData<T extends number, Q extends string>(
  data: T,
  type: Q
): React.ReactNode {
  return (
    <div className="question_item_actions">
      <span className="question_item_actions_span">{data}</span>
      <p className="section_subtitle_smaller text-black dark:text-white">
        {type}
      </p>
    </div>
  );
}

// Function to hash a password
export function hashPassword<T extends string>(password: T): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Function to compare a password with a hashed password
export async function comparePassword<T extends string>(
  password: T,
  hashedPassword: T
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

// Function to calculate a date
export function calculateDate(date: Date): string {
  const createdAt = new Date(date);

  return createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Function to check form validity
export function checkFormValidity<T extends any>(condition: T): boolean {
  let formIsValid;

  if (condition) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  return formIsValid;
}

// Function to get questions tags
export function getQuestionsTags(typeOfQuestions: QuestionItemPropsTypes[]) {
  const tagsSet = new Set();

  typeOfQuestions?.forEach((question: any) => {
    question.tags?.forEach((tag: any) => {
      tagsSet.add(tag);
    });
  });

  const tags = Array.from(tagsSet);

  return tags;
}

// Function to update search params
export function updateSearchParams<T extends string>(
  type: T,
  value: T
): string {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

// Function to delete search params
export function deleteSearchParams<T extends string>(type: T): string {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

// Function to redirect to a path if not authenticated
export function notAuthNavigate(path: string): void {
  return redirect(path);
}
