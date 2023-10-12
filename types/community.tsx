import { TagsPropsTypes } from "./tags";

export interface CommunityListPropsTypes {
  community: CommunityItemPropsTypes[];
}

export interface CommunityItemPropsTypes {
  id: string | number;
  image: string;
  username: string;
  name: string;
  reputation: number;
  tags: TagsPropsTypes[];
}
