import { Request, Response } from "express";
import { ClothesRepositoryPrisma } from "../../infrastructure/ClothesRepositoryPrisma";
import { DeleteClothes } from "../../application/DeleteClothes";

const clothesRepository = new ClothesRepositoryPrisma();
const deleteClothes = new DeleteClothes(clothesRepository);

export class DeleteClothesController {
    async run(req: Request, res: Response) {
        try {
            const { name } = req.params;
            await clothesRepository.deleteByName(name);
            res.status(200).json({ message: 'Eliminado Correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
