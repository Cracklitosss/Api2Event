import { Router } from "express";
import { CreateClothesController } from "../infrastructure/controllers/CreateClothesController";
import { GetAllClothesController } from "../infrastructure/controllers/GetAllClothesController";
import { DeleteClothesController } from "../infrastructure/controllers/DeleteClothesController";

const clothesRoutes = Router();

const createClothesController = new CreateClothesController();
const getAllClothesController = new GetAllClothesController();
const deleteClothesController = new DeleteClothesController();

clothesRoutes.post('/create', createClothesController.run.bind(createClothesController));
clothesRoutes.get('/getAll', getAllClothesController.run.bind(getAllClothesController));
clothesRoutes.delete('/delete/:name', deleteClothesController.run.bind(deleteClothesController));

export default clothesRoutes;
