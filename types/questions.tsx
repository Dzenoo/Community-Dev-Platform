import { MouseEventHandler } from "react";
import { QuestionAnswerPropsTypes } from "./answer";

export interface QuestionItemPropsTypes {
  _id: string;
  title: string;
  tags: {
    _id?: string;
    title: string;
  }[];
  user: {
    _id: string;
    username: string;
  };
  votes: number;
  downvotes: number;
  answers: QuestionAnswerPropsTypes[];
  description?: string;
  showActions?: boolean;
  language?: string;
  views: number;
  createdAt: Date;
}

export interface QuestionListPropsTypes {
  showActions?: boolean;
  questions: QuestionItemPropsTypes[];
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
  data: number | string | undefined;
  type: string;
}
