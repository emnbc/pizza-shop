export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive: boolean;
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
}
