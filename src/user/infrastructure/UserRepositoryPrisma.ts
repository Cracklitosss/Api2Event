import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/User";
import { log } from "console";

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    const userSaved = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });

    return new User(
      userSaved.email,
      userSaved.name,
    );
  }

  async getAll(): Promise<User[]> {
    const allUsers = await this.prisma.user.findMany();
    return allUsers.map((user: { email: string; name: string; }) => new User(user.email, user.name));
  }

  async delete(email: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        email: email,
      },
    });
}
}