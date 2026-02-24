export interface UserProfile {
  firstName: string;
  lastName: string;
  socialLinks: ProfileLink[];
}

export interface ProfileLink {
  linkUrl: string;
  platform: string;
  memberSinceYear: string;
}

export const initialData: UserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: []
}
