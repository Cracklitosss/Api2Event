import * as dotenv from 'dotenv';
import ioClient from "socket.io-client";
import { ISocketService } from "../../domain/services/ISocketService";
import { UserReceived } from "../../domain/UserReceived";

dotenv.config();

const socket = ioClient(process.env.SOCKET_SERVER_URL!);

export class SocketService implements ISocketService {
  emitUser(user: UserReceived): boolean {
    try {
      socket.emit("notificacionUsuarioCreado", user);
      console.log("The user was emitted successfully :", JSON.stringify(user));
      console.log("Message sent status: OK");
      return true;
    } catch (error) {
      console.error("Error sending notification:", error);
      return false;
    }
  }
}
