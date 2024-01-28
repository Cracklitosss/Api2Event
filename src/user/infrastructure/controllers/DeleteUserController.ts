import { Request, Response } from "express";
import { UserRepositoryPrisma } from "../../infrastructure/UserRepositoryPrisma";
import { DeleteUser } from "../../application/DeleteUser";

const userRepository = new UserRepositoryPrisma();
const deleteUser = new DeleteUser(userRepository);

export class DeleteUserController {
    async run(req: Request, res: Response) {
        try {
            const email = req.params.email;
            await deleteUser.run(email);
            res.status(200).json({ message: 'Usuario eliminado' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
