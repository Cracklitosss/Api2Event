// UserController.ts
import { Request, Response } from "express";
import { CreateUser } from "../../application/CreateUser";
import { GetUser } from "../../application/GetUser";
import { IUserRepository } from "../ports/IUserRepository";

export class UserController {
  constructor(
    private createUserService: CreateUser,
    private getUserService: GetUser,
    private userRepository: IUserRepository
  ) {}

  async getUserById(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    const user = await this.getUserService.execute(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    await this.createUserService.execute(user);
    res.status(201).json({ message: "User created successfully" });
  }

  // Nuevo método handle que puede ser utilizado como middleware por app.use
  handle(req: Request, res: Response): void {
    // Puedes agregar lógica adicional aquí si es necesario
    // Aquí podrías manejar rutas adicionales o lógica de middleware específica
  }
}
