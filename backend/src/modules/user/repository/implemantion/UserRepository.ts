import { User } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateUserDTO } from "../../dto/user/ICreateUserDTO";
import { IListEmailUserDTO } from "../../dto/user/IListEmailUserDTO";
import { IListIdUserDTO } from "../../dto/user/IListIdUserDTO";
import { IListNameUserDTO } from "../../dto/user/IListNameUserDTO";
import { IUpdateUserDTO } from "../../dto/user/IUpdateUserDTO";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository;

  constructor(){
    this.repository = prismaClient.user;
  }

  async create({email,name,password,is_adm}: ICreateUserDTO): Promise<void> {    
    await this.repository.create({
      data: {
        email,
        name,
        password,
        is_adm
      },
    });
  }

  async list(): Promise<User[]> {
    const data = await this.repository.findMany();

    return data;
  }

  async listId({ id }: IListIdUserDTO): Promise<User | null> {
    const data = await this.repository.findFirst({
      where: {
        id,
      },
    });

    return data;
  }

  async listEmail({ email }: IListEmailUserDTO): Promise<User | null> {
    const data = await this.repository.findFirst({
      where: {
        email,
      },
    });

    return data;
  }

  async listName({ name }: IListNameUserDTO): Promise<User | null> {
    const data = await this.repository.findFirst({
      where: {
        name,
      },
    });

    return data;
  }

  async update({email,id,name,password,is_adm}: IUpdateUserDTO): Promise<User> {
    const data = await this.repository.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        password,
        is_adm
      },
    });

    return data;
  }
}

export { UserRepository }
