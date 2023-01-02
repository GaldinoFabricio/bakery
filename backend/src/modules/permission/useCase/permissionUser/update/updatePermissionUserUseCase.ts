import { PermissionUser } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUpdatePermissionUserDTO } from "../../../dto/permissionUser/IUpdatePermissionUserDTO";
import { IPermissionUserRepository } from "../../../repository/IPermissionUserRepository";

@injectable()
class UpdatePermissionUserUseCase {
  constructor(
    @inject("PermissionUserRepository")
    private permissionUserRepository: IPermissionUserRepository
  ){}

  async execute({ id, user_id }: IUpdatePermissionUserDTO): Promise<PermissionUser> {
    const data = await this.permissionUserRepository.update({ id, user_id });

    return data;
  }
}

export { UpdatePermissionUserUseCase }