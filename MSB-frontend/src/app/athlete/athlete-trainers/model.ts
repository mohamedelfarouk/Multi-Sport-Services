export interface TrainerPackage {
    name: string;
    description: string;
    price: number;
    isLongTerm: boolean;
  }
  
  export interface Trainer {
    userId: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    username: string;
    birthDate: Date | null;
    creationDate: Date | null;
    phoneNumber: string | null;
    password: string; // Depending on your use case, you might not need to include this
    gender: string | null;
    address: string | null;
    packages: TrainerPackage[];
  }
  