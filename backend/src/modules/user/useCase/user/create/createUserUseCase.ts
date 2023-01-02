import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../../dto/user/ICreateUserDTO";
import { IUserRepository } from "../../../repository/IUserRepository";
import AppError from "../../../../../shared/errors/AppErrors";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({email,name,password,is_adm}:ICreateUserDTO): Promise<void> {
    if (!email || !name || !password || !is_adm) {
      throw new AppError("Email/Name/Password not informed", 400);
    }

    const data = await this.userRepository.listEmail({ email });

    if (data) {
      throw new AppError("User already exist", 400);
    }

    const passwordHash = await hash(password, 8)

    await this.userRepository.create({
      email,
      name,
      password: passwordHash,
      is_adm
    });
  }
}

export { CreateUserUseCase }
