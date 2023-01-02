import { PermissionUser } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreatePermissionUserDTO } from "../../dto/permissionUser/ICreatePermissionUserDTO";
import { IListIdPermissionUserDTO } from "../../dto/permissionUser/IListIdPermissionUserDTO";
import { IListUserIdPermissionUserDTO } from "../../dto/permissionUser/IListUserIdPermissionUserDTO";
import { IUpdatePermissionUserDTO } from "../../dto/permissionUser/IUpdatePermissionUserDTO";
import { IPermissionUserRepository } from "../IPermissionUserRepository";

class PermissionUserRepository implements IPermissionUserRepository {
  private repository;

  constructor() {
    this.repository = prismaClient.permissionUser;
  }

  async create({ user_id }: ICreatePermissionUserDTO): Promise<void> {
    await this.repository.create({
      data: {
        user_id,
      },
    });
  }

  async list(): Promise<PermissionUser[]> {
    const data = await this.repository.findMany();

    return data;
  }

  async listId({ id }: IListIdPermissionUserDTO): Promise<PermissionUser | null> {
    const data = await this.repository.findFirst({
      where: {
        id,
      },
    });

    return data;
  }

  async listUserId({ user_id }: IListUserIdPermissionUserDTO): Promise<PermissionUser | null> {
    const data = await this.repository.findFirst({
      where: {
        user_id,
      },
    });

    return data;
  }

  async update({ id, user_id }: IUpdatePermissionUserDTO): Promise<PermissionUser> {
    const data = await this.repository.update({
      where: {
        id,
      },
      data: {
        user_id,
      },
    });

    return data;
  }
}

export { PermissionUserRepository }
