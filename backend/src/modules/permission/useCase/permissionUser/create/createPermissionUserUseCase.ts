import { inject, injectable } from "tsyringe";
import { ICreatePermissionUserDTO } from "../../../dto/permissionUser/ICreatePermissionUserDTO";
import { IPermissionUserRepository } from "../../../repository/IPermissionUserRepository";

@injectable()
class CreatePermissionUserUseCase {
  constructor(
    @inject("PermissionUserRepository")
    private permissionUserRepository: IPermissionUserRepository
  ){}
  
  async execute({user_id}: ICreatePermissionUserDTO): Promise<void> {
    await this.permissionUserRepository.create({ user_id });
  }
}

export { CreatePermissionUserUseCase }
