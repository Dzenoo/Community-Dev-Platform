export interface TagsPropsTypes {
  _id?: string;
  title: string;
  shouldTruncate?: boolean;
}

export interface TagListPropsTypes {
  tags: TagItemPropsTypes[];
}

export interface TagItemPropsTypes {
  id: string;
  name: string;
  questionsCount: number;
  description: string;
}
