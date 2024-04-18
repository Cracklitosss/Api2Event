import { Request, Response } from "express";

import { UserReceivedRepositoryPrisma } from "../UserReceivedRepositoryPrisma";
import { UserReceived } from "../../application/UserReceived";
import { NotificationUserReceivedService } from "../serviceRabbit/NotificationUserReceivedService";
import { EmitUserUseCase } from "../../application/services/UserSocketService";
import { SocketService } from "../serviceSocket/socketService";
const serviceSocket = new SocketService();
const userReceivedRepository = new UserReceivedRepositoryPrisma();
const notificationService = new NotificationUserReceivedService();
const emitUseCase = new EmitUserUseCase(serviceSocket)
const userReceived = new UserReceived(userReceivedRepository, notificationService,emitUseCase);

export class UserReceivedController {
  async processMessage(req: Request, res: Response) {
    try {
      const { message } = req.body;
      await userReceived.processMessage(message);
      res.status(201).json({ message: "Usuario Creado" });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  }
}
