import { PermissionUser } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IListUserIdPermissionUserDTO } from "../../../dto/permissionUser/IListUserIdPermissionUserDTO";
import { IPermissionUserRepository } from "../../../repository/IPermissionUserRepository";

@injectable()
class ListUserIdPermissionUserUseCase {
  constructor(
    @inject("PermissionUserRepository")
    private permissionUserRepository: IPermissionUserRepository
  ){}

  async execute({ user_id }: IListUserIdPermissionUserDTO): Promise<PermissionUser | null>  {
    const data = await this.permissionUserRepository.listUserId({ user_id });

    return data;
  }
}

export { ListUserIdPermissionUserUseCase }
