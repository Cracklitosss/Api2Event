import { Request, Response } from "express";
import { ClothesRepositoryPrisma } from "../../infrastructure/ClothesRepositoryPrisma";
import { GetAllClothes } from "../../application/GetAllClothes";

const clothesRepository = new ClothesRepositoryPrisma();
const getAllClothes = new GetAllClothes(clothesRepository);

export class GetAllClothesController {
    async run(req: Request, res: Response) {
        try {
            const allClothes = await clothesRepository.getAll();
            res.status(200).json({ clothes: allClothes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
