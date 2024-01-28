import { Router } from "express";
import { ClothesRepositoryPrisma } from "../../infrastructure/ClothesRepositoryPrisma";
import { CreateClothes } from "../../application/CreateClothes";

const ClothesRouter = Router();
const clothesRepository = new ClothesRepositoryPrisma();
const createClothes = new CreateClothes(clothesRepository);

ClothesRouter.post('/create', async (req, res) => {
    try {
        const { name, size, color } = req.body;
        const clothes = await createClothes.run(name, size, color);
        res.status(201).json({ clothes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

ClothesRouter.get('/getAll', async (req, res) => {
    try {
        const allClothes = await clothesRepository.getAll();
        res.status(200).json({ clothes: allClothes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

ClothesRouter.delete('/delete/:name', async (req, res) => {
    try {
        const { name } = req.params;
        await clothesRepository.deleteByName(name);
        res.status(200).json({ message: 'Eliminado Correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});
export default ClothesRouter;