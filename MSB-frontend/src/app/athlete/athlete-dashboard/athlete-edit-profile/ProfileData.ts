export interface ProfileData {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string | null;
    birthDate: string | null; // Use string for date in ISO format
    gender: string | null;
    address: string | null;
    sports: { id: number, name: string, sportType: string }[];
    profilePicture?: string; // Optional field for profile picture URL
  }
  