import { PermissionUser } from "@prisma/client";
import { ICreatePermissionUserDTO } from "../dto/permissionUser/ICreatePermissionUserDTO"
import { IListIdPermissionUserDTO } from "../dto/permissionUser/IListIdPermissionUserDTO";
import { IListUserIdPermissionUserDTO } from "../dto/permissionUser/IListUserIdPermissionUserDTO";
import { IUpdatePermissionUserDTO } from "../dto/permissionUser/IUpdatePermissionUserDTO";

interface IPermissionUserRepository {
  create(data: ICreatePermissionUserDTO): Promise<void>;

  list(): Promise<PermissionUser[]>;

  listId({ id }: IListIdPermissionUserDTO): Promise<PermissionUser | null>;

  listUserId({ user_id }: IListUserIdPermissionUserDTO): Promise<PermissionUser | null>;

  update(data: IUpdatePermissionUserDTO): Promise<PermissionUser>;
}

export { IPermissionUserRepository }
