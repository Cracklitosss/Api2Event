// DeleteUser.ts

import { IUserRepository } from "../interfaces/ports/IUserRepository";

export class DeleteUser {
    constructor(private readonly repository: IUserRepository) {}

    async run(email: string): Promise<void> {
        await this.repository.delete(email);
    }
}
