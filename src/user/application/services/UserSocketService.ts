import { UserReceived } from "../UserReceived";
import { SocketService } from "../../infrastructure/serviceSocket/socketService";

export class EmitUserUseCase<T extends { message: string }> {  // Asegúrate de que 'T' tenga al menos una propiedad 'message'
    constructor(readonly socketService: SocketService){}

    async run (user: T){
        this.socketService.emitUser(user);
    }
}
