export interface CommunityListPropsTypes {
  community: CommunityItemPropsTypes[];
}

export interface CommunityItemPropsTypes {
  _id?: string | number;
  username: string;
  biography: string;
  name: string;
}
