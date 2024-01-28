import { Request, Response } from "express";
import { ClothesRepositoryPrisma } from "../../infrastructure/ClothesRepositoryPrisma";
import { CreateClothes } from "../../application/CreateClothes";

const clothesRepository = new ClothesRepositoryPrisma();
const createClothes = new CreateClothes(clothesRepository);

export class CreateClothesController {
    async run(req: Request, res: Response) {
        try {
            const { name, size, color } = req.body;
            const clothes = await createClothes.run(name, size, color);
            res.status(201).json({ clothes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
