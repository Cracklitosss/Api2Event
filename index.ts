import express from "express";
import mongoose, { ConnectOptions } from 'mongoose';
import { UserController } from "./src/users/interfaces/controllers/UserController";
import { CreateUser } from "./src/users/application/CreateUser";
import { GetUser } from "./src/users/application/GetUser";
import { MongoDBUserRepository } from "./src/users/infrastructure/MongoDBUserRepository";
import { IUserRepository } from "./src/users/interfaces/ports/IUserRepository";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = 3000;

app.use(express.json());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('La variable de entorno MONGODB_URI no está definida.');
}

mongoose.connect(mongoUri);


const userRepository: IUserRepository = new MongoDBUserRepository();
const createUser = new CreateUser(userRepository);
const getUser = new GetUser(userRepository);
const userController = new UserController(createUser, getUser, userRepository);

app.use("/api/users", userController.handle.bind(userController));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});