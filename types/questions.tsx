export interface QuestionItemPropsTypes {
  id: string;
  title: string;
  tags: {
    id: string;
    title: string;
  }[];
  user: string;
  votes: number;
  answers: number;
  views: number;
}
