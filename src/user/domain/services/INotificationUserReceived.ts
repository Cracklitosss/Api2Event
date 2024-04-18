import { UserReceived } from "../UserReceived";

export interface INotificationUserReceived {
  sendNotificationUserReceived(userReceived: UserReceived): void;
}
