export interface TagsPropsTypes {
  id: string | number;
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
