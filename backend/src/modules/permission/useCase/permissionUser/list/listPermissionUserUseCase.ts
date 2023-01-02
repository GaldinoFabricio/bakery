import { PermissionUser } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IPermissionUserRepository } from "../../../repository/IPermissionUserRepository";

@injectable()
class ListPermissionUserUseCase {
  constructor(
    @inject("PermissionUserRepository")
    private permissionUserRepository: IPermissionUserRepository
  ){}

  async execute(): Promise<PermissionUser[]> {
    const data = await this.permissionUserRepository.list();

    return data;
  }
}

export { ListPermissionUserUseCase }
