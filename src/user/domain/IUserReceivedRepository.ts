import { UserReceived } from "./UserReceived";

export interface IUserReceivedRepository {
  create(userReceived: UserReceived): Promise<void>;
}
