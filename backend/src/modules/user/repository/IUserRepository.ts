import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { IGetEmailUserDTO } from "../dto/IGetEmailUserDTO";
import { IGetIdUserDTO } from "../dto/IGetIdUserDTO";
import { IGetNameUserDTO } from "../dto/IGetNameUserDTO";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { IUpdatePasswordUserDTO } from "../dto/IUpdatePasswordUserDTO";

interface IUserRepository {
	create(data: ICreateUserDTO): Promise<void>;

	getAll(): Promise<User[]>;

	getEmail({ email }: IGetEmailUserDTO): Promise<User | null>;

	getName({ name }: IGetNameUserDTO): Promise<User | null>;

	getId({ id }: IGetIdUserDTO): Promise<User | null>;

	update(data: IUpdateUserDTO): Promise<User>;

	updatePassword({ id, password }: IUpdatePasswordUserDTO): Promise<void>;
}

export { IUserRepository };
