import { UserReceived } from "../UserReceived";

export interface ISocketService {
  emitUser(user : UserReceived):boolean;
}