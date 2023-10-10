export interface QuestionItemPropsTypes {
  id: string;
  title: string;
  tags: {
    id: string;
    title: string;
  }[];
  user: string;
  votes: number;
  codeSnippet: string;
  downvotes?: number;
  answers: number;
  description?: string;
  views: number;
}

export interface QuestionDetailsActionsContentPropsTypes {
  id: string;
  votes: number;
  downvotes?: number;
}

export interface QuestionDetailsActionsButtonPropsTypes {
  icon: string;
  onClick: any;
  data?: string | number;
  type: string;
}

export interface QuestionDetailsCodeComponentPropsTypes {
  codeSnippet: string;
}
