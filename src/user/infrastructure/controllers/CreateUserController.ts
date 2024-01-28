import { Request, Response } from "express";
import { UserRepositoryPrisma } from "../../infrastructure/UserRepositoryPrisma";
import { CreateUser } from "../../application/CreateUser";

const userRepository = new UserRepositoryPrisma();
const createUser = new CreateUser(userRepository);

export class CreateUserController {
    async run(req: Request, res: Response) {
        try {
            const { email, name } = req.body;
            const user = await createUser.run(email, name);
            res.status(201).json({ user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
