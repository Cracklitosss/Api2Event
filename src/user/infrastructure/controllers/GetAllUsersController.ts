import { Request, Response } from "express";
import { UserRepositoryPrisma } from "../../infrastructure/UserRepositoryPrisma";
import { GetAllUsers } from "../../application/GetAllUsers";

const userRepository = new UserRepositoryPrisma();
const getAllUsers = new GetAllUsers(userRepository);

export class GetAllUsersController {
    async run(req: Request, res: Response) {
        try {
            const allUsers = await userRepository.getAll();
            res.status(200).json({ users: allUsers });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
