export interface UserProfile {
  firstName: string;
  lastName: string;
  socialLinks: string[];
}

export const initialData: UserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: []
}
