import { Router } from "express";
import { UserRepositoryPrisma } from "../../infraestructure/UserRepositoryPrisma";
import { CreateUser } from "../../application/CreateUser";

const UserRouter = Router();
const userRepository = new UserRepositoryPrisma();
const createUser = new CreateUser(userRepository);


UserRouter.post('/create', async (req, res) => {
    try {
        const { email, name} = req.body;
        const user = await createUser.run(email, name);
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

UserRouter.get('/getAll', async (req, res) => {
    try {
        const allUsers = await userRepository.getAll();
        res.status(200).json({ users: allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

export default UserRouter;