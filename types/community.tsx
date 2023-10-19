// import { TagsPropsTypes } from "./tags";

export interface CommunityListPropsTypes {
  community: CommunityItemPropsTypes[];
}

export interface CommunityItemPropsTypes {
  _id?: string | number;
  // image: string;
  username: string;
  biography: string;
  name: string;
  // reputation: number;
  // tags: TagsPropsTypes[];
}
