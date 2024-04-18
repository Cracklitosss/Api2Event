import { PrismaClient } from "@prisma/client";
import { IUserReceivedRepository } from "../domain/IUserReceivedRepository";
import { UserReceived } from "../domain/UserReceived";

export class UserReceivedRepositoryPrisma implements IUserReceivedRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(userReceived: UserReceived): Promise<void> {
    await this.prisma.userReceived.create({
      data: {
        message: userReceived.message,
      },
    });
  }
}
