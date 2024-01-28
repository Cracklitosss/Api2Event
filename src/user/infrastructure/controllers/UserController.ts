import { Router } from "express";
import { UserRepositoryPrisma } from "../../infrastructure/UserRepositoryPrisma";
import { CreateUser } from "../../application/CreateUser";
import { GetAllUsers } from "../../application/GetAllUsers";
import { DeleteUser } from "../../application/DeleteUser";

const UserRouter = Router();
const userRepository = new UserRepositoryPrisma();
const createUser = new CreateUser(userRepository);
const getAllUsers = new GetAllUsers(userRepository);
const deleteUser = new DeleteUser(userRepository);

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

UserRouter.delete('/delete/:email', async (req, res) => {
    try {
        const email = req.params.email;
        await deleteUser.run(email);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

export default UserRouter;