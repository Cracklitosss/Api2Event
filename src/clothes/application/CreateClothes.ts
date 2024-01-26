import { IClothesRepository } from "../interfaces/ports/IClothesRepository";
import { Clothes } from "../domain/Clothes";

export class CreateClothes {
    constructor(private readonly repository: IClothesRepository) {}

    async run(name: string, size: string, color: string): Promise<Clothes> {
        const clothes = new Clothes(name, size, color);
        return await this.repository.create(clothes);
    }
}