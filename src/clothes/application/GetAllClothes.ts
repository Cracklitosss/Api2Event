import { IClothesRepository } from "../domain/IClothesRepository";
import { Clothes } from "../domain/Clothes";

export class GetAllClothes {
    constructor(private readonly repository: IClothesRepository) {}

    async run(): Promise<Clothes[]> {
        return await this.repository.getAll();
    }
}