import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../../shared/errors/AppErrors";
import { IListNameUserDTO } from "../../../dto/user/IListNameUserDTO";
import { IUserRepository } from "../../../repository/IUserRepository";

@injectable()
class ListNameUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ name }: IListNameUserDTO): Promise<User> {
    if (!name) {
      throw new AppError("Name not informed", 400);
    }

    const data = await this.userRepository.listName({ name });

    return data;
  }
}

export { ListNameUserUseCase }
