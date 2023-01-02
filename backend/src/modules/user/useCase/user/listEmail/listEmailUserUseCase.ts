import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../../shared/errors/AppErrors";
import { IListEmailUserDTO } from "../../../dto/user/IListEmailUserDTO";
import { IUserRepository } from "../../../repository/IUserRepository";

@injectable()
class ListEmailUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ email }: IListEmailUserDTO): Promise<User> {
    if (!email) {
      throw new AppError("Email not informed", 400);
    }

    const data = await this.userRepository.listEmail({ email });

    return data;
  }
}

export { ListEmailUserUseCase }
