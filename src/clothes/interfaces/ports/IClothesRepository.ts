import { Clothes } from "../../domain/Clothes";

export interface IClothesRepository {
  create(clothes: Clothes): Promise<Clothes>;
  getAll(): Promise<Clothes[]>;
  deleteByName(name: string): Promise<void>;
}