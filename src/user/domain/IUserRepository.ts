import { User } from "./User";

export interface IUserRepository {
    create(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    delete(email: string): Promise<void>;
}