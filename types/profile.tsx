import { QuestionItemPropsTypes } from "./questions";

export interface ProfileStatisticsPropsTypes {
  profileStatistics: ProfileItemPropsTypes[];
}

export interface ProfileListPropsTypes {
  profileStatistics: ProfileItemPropsTypes[];
}

export interface ProfileItemPropsTypes {
  id: string | number;
  path: string;
  name: string;
  quantity: number;
}

export interface ProfileAnswersDataListPropsTypes {
  profileAnswers: ProfileAsnwersDataItemPropsTypes[];
}

export interface ProfileAsnwersDataItemPropsTypes {
  _id: string | number;
  question: any;
  title: string;
  description: string;
}

export interface ProfilePropsTypes {
  questions: QuestionItemPropsTypes[];
  id: string | number;
  name: string;
  username: string;
  location: string;
  portfolio: string;
  biography: string;
  createdAt: Date;
}

export interface FetchedProfilePropsTypes extends ProfilePropsTypes {
  goldBadges: number;
  silverBadges: number;
  bronzeBadges: number;
  _id: string | number;
  savedQuestions: QuestionItemPropsTypes[];
}
