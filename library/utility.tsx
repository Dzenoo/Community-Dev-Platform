import Image from "next/image";
import bcrypt from "bcryptjs";

export function generateQuestionActionsData<
  T extends string | undefined,
  Q extends number,
  Y extends string
>(icon: T | undefined, data: Q, type: Y): React.ReactNode {
  return (
    <div className="question_item_actions">
      {icon && <Image src={icon} alt={type} width={20} height={20} />}
      <span className="question_item_actions_span">{data}</span>
      <p className="section_subtitle_smaller text-white">{type}</p>
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
