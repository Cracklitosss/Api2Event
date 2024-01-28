import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();

userRoutes.post('/create', createUserController.run.bind(createUserController));
userRoutes.get('/getAll', getAllUsersController.run.bind(getAllUsersController));
userRoutes.delete('/delete/:email', deleteUserController.run.bind(deleteUserController));

export default userRoutes;
