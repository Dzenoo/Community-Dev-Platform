import { TagItemPropsTypes } from "@/types/tags";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

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

export function hashPassword<T extends string>(password: T) {
  return bcrypt.hash(password, 12);
}

export async function comparePassword<T extends string>(
  password: T,
  hashedPassword: T
) {
  return await bcrypt.compare(password, hashedPassword);
}

export function calculateDate(date: Date) {
  const createdAt = new Date(date);

  return createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function checkFormValidity<T extends any>(condition: T): boolean {
  let formIsValid;

  if (condition) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  return formIsValid;
}

export function getQuestionsTags(typeOfQuestions: any) {
  const tagsSet = new Set();

  typeOfQuestions?.forEach((question: any) => {
    question.tags?.forEach((tag: any) => {
      tagsSet.add(tag);
    });
  });

  const tags = Array.from(tagsSet);

  return tags;
}

export function updateSearchParams<T extends string>(type: T, value: T) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export function deleteSearchParams<T extends string>(type: T) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export function notAuthNavigate(path: string) {
  return redirect(path);
}
