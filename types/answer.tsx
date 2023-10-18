export interface QuestionAnswerPropsTypes {
  _id: string;
  user: {
    username: string;
  };
  description: string;
  language: string;
  upvotes: string[];
  downvotes: string[];
}
