import Image from "next/image";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export function generateQuestionActionsData<
  T extends string | undefined,
  Q extends number,
  Y extends string
>(icon: T | undefined, data: Q, type: Y): React.ReactNode {
  return (
    <div className="question_item_actions">
      {icon && <Image src={icon} alt={type} width={20} height={20} />}
      <span className="question_item_actions_span">{data}</span>
      <p className="section_subtitle_smaller text-black dark:text-white">
        {type}
      </p>
    </div>
  );
}

// Create function for hashing password and comparing password with bcrypt

export function hashPassword<T extends string>(password: T) {
  return bcrypt.hash(password, 12);
}

// Create function for comparing password with bcrypt

export async function comparePassword<T extends string>(
  password: T,
  hashedPassword: T
) {
  return await bcrypt.compare(password, hashedPassword);
}

// Create function to calculate date when user joined based on createdAt date

export function calculateDate(date: Date) {
  const createdAt = new Date(date);

  return createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Crate function that checks form validity

export function checkFormValidity<T extends any>(condition: T) {
  let formIsValid;

  if (condition) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  return formIsValid;
}

export function getQuestionsTags(typeOfQuestions: any) {
  const tagsSet = new Set(); // Use a Set to store unique tags

  typeOfQuestions?.forEach((question: any) => {
    question.tags?.forEach((tag: any) => {
      tagsSet.add(tag); // Add each tag to the Set
    });
  });

  const tags = Array.from(tagsSet); // Convert the Set back to an array

  return tags;
}

// Update search params

export function updateSearchParams<T extends string>(type: T, value: T) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

// Delete search params

export function deleteSearchParams<T extends string>(type: T) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export function notAuthNavigate(path: string) {
  return redirect(path);
}

export function getAuth() {
  const { data, status } = useSession();

  return status;
}
