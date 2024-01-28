import { IClothesRepository } from "../domain/IClothesRepository";
import { Clothes } from "../domain/Clothes";
export class DeleteClothes {
    constructor(private readonly repository: IClothesRepository) {}

    async run(name: string): Promise<void> {
        await this.repository.deleteByName(name);
    }
}
