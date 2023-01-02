import { PermissionUser } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IListIdPermissionUserDTO } from "../../../dto/permissionUser/IListIdPermissionUserDTO";
import { IPermissionUserRepository } from "../../../repository/IPermissionUserRepository";

@injectable()
class ListIdPermissionUserUseCase {
  constructor(
    @inject("PermissionUserRepository")
    private permissonUserRepository: IPermissionUserRepository
  ){}

  async execute({ id }: IListIdPermissionUserDTO): Promise<PermissionUser | null> {
    const data = await this.permissonUserRepository.listId({ id });

    return data;
  }
}

export { ListIdPermissionUserUseCase }
