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
  id: string | number;
  questionId: string | number;
  title: string;
}
