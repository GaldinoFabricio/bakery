import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../repository/IUserRepository";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(): Promise<User[]> {
    const data = await this.userRepository.list();

    return data;
  }
}

export { ListUserUseCase }
