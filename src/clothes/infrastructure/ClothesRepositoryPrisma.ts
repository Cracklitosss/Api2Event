import { PrismaClient } from "@prisma/client";
import { IClothesRepository } from "../interfaces/ports/IClothesRepository";
import { Clothes } from "../domain/Clothes";

export class ClothesRepositoryPrisma implements IClothesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(clothes: Clothes): Promise<Clothes> {
    const clothesSaved = await this.prisma.clothes.create({
      data: {
        name: clothes.name,
        size: clothes.size,
        color: clothes.color,
      },
    });

    return new Clothes(
      clothesSaved.name,
      clothesSaved.size,
      clothesSaved.color
    );
  }

  async getAll(): Promise<Clothes[]> {
    const allClothes = await this.prisma.clothes.findMany();
    return allClothes.map((clothes) => new Clothes(clothes.name, clothes.size, clothes.color));
}

async deleteByName(name: string): Promise<void> {
  await this.prisma.clothes.deleteMany({
    where: {
      name,
    },
  });
}

}
