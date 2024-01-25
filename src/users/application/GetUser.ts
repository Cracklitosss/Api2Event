// src/users/application/CreateUser.ts
import { User } from "../domain/User";
import { IUserRepository } from "../interfaces/ports/IUserRepository";

export class GetUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string): Promise<User | null> {
    return this.userRepository.findById(userId);
  }
}

