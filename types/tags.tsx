export interface TagsPropsTypes {
  _id?: string;
  title: string;
}

export interface TagListPropsTypes {
  tags: TagItemPropsTypes[];
}

export interface TagItemPropsTypes {
  id: string | number;
  name: string;
  questionsCount: number;
  description: string;
}
