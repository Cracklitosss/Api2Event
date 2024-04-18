import { UserReceived } from "../../domain/UserReceived";
import { INotificationUserReceived } from "../../domain/services/INotificationUserReceived";
import * as amqp from "amqplib";

export class NotificationUserReceivedService implements INotificationUserReceived {
  async sendNotificationUserReceived(userReceived: UserReceived): Promise<void> {
    try {
      const message = `Usuario "${userReceived.message}" Creado`;
      const connection = await amqp.connect(process.env.RABBITMQ_URL || "amqps://guuiiotx:Gz9SMj0AspY5hXgtm0MDweuxEXfDLVLv@gull.rmq.cloudamqp.com/guuiiotx");
      const channel = await connection.createChannel();
      const ex = "amq.direct";
      const routingKey = "segundacolakey";
      channel.publish(ex, routingKey, Buffer.from(message));

      await channel.close();
      await connection.close();
      console.log("Mensaje publicado:" + message);
    } catch (error) {
      console.log("Error en el catch", error);
    }
  }
} 
