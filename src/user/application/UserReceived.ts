import { IUserReceivedRepository } from "../domain/IUserReceivedRepository";
import { UserReceived as UserReceivedDomain } from "../domain/UserReceived";
import { NotificationUserReceivedService } from "../infrastructure/serviceRabbit/NotificationUserReceivedService";
import { EmitUserUseCase } from "./services/UserSocketService";

export class UserReceived {
  constructor(
    private readonly repository: IUserReceivedRepository,
    private readonly notificationService: NotificationUserReceivedService,
    private readonly emitUserCase: EmitUserUseCase<UserReceivedDomain>
  ) {}

  async processMessage(message: string): Promise<void> {
    const userReceived = new UserReceivedDomain(message);
    await this.repository.create(userReceived);
    this.notificationService.sendNotificationUserReceived(userReceived);
    this.emitUserCase.run(userReceived);
  }
}
