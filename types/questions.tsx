import { MouseEventHandler } from "react";
import { QuestionAnswerPropsTypes } from "./answer";

export interface QuestionItemPropsTypes {
  id: string;
  title: string;
  tags: {
    id: string;
    title: string;
  }[];
  user: string;
  votes: number;
  downvotes: number;
  answers: QuestionAnswerPropsTypes[];
  description?: string;
  language?: string;
  views: number;
}

export interface QuestionDetailsActionsContentPropsTypes {
  id: string;
  votes: number;
  downvotes: number;
}

export interface QuestionDetailsCodeComponentPropsTypes {
  codeSnippet: string;
  language?: string;
}

export interface QuestionDetailsActionsDataPropsTypes {
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  data?: number | string;
  type: string;
}
