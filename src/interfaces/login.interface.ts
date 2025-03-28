export interface IUser {
    _id: string;
    name: string;
    intial: string;
    email: string;
    role: string;
    permission: string;
    phone: string;
    region: string[];
    ivrActive: boolean;
    department: string;
    createdBy: string;
    tokens: string[]; // Update type if tokens have a defined structure
    createdAt: string; // Consider Date type if parsing as Date
    updatedAt: string; // Consider Date type if parsing as Date
    __v: number;
  }
  
  export interface IAuthResponse {
    user: IUser;
    token: string;
  }
  