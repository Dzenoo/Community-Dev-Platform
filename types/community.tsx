export interface CommunityListPropsTypes {
  community: CommunityItemPropsTypes[];
}

export interface CommunityItemPropsTypes {
  _id?: string | number;
  username: string;
  biography: string;
  name: string;
  email?: string;
  goldBadges?: number;
  silverBadges?: number;
  bronzeBadges?: number;
}

export interface CommunityTablesPropsTypes {
  communityUsers?: CommunityItemPropsTypes[];
}
