
import { IUserRepository } from "../interfaces/ports/IUserRepository";
import { User } from "../domain/User";
import { UserModel } from "../infrastructure/models/UserModel";

export class MongoDBUserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).exec();
    return user ? user.toObject() : null;
  }

  async save(user: User): Promise<void> {
    await UserModel.create(user);
  }
}

