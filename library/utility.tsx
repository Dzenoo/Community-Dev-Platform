import Image from "next/image";

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
