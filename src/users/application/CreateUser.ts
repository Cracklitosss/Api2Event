
import { User } from "../domain/User";
import { IUserRepository } from "../interfaces/ports/IUserRepository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<void> {
    // Agrega lógica de validación u otras reglas de negocio si es necesario
    await this.userRepository.save(user);
  }
}

