import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dto/user/ICreateUserDTO";
import { IListEmailUserDTO } from "../dto/user/IListEmailUserDTO";
import { IListIdUserDTO } from "../dto/user/IListIdUserDTO";
import { IListNameUserDTO } from "../dto/user/IListNameUserDTO";
import { IUpdateUserDTO } from "../dto/user/IUpdateUserDTO";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;

  list(): Promise<User[]>;

  listEmail({ email }: IListEmailUserDTO): Promise<User | null>;

  listName({ name }: IListNameUserDTO): Promise<User | null>;

  listId({ id }:IListIdUserDTO): Promise<User | null>;

  update(data: IUpdateUserDTO): Promise<User>;
}

export { IUserRepository }
