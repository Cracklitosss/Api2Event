import { UserReceived } from "../../domain/UserReceived";
import { NotificationUserReceivedService } from "../../infrastructure/serviceRabbit/NotificationUserReceivedService";

export class NotificationUserReceived {
    constructor(readonly serviceNotification: NotificationUserReceivedService) {}

    async run(userReceived: UserReceived) {
        await this.serviceNotification.sendNotificationUserReceived(userReceived);
    }
}
