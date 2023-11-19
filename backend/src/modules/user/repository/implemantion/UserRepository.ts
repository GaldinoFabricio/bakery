import { User } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IGetEmailUserDTO } from "../../dto/IGetEmailUserDTO";
import { IGetIdUserDTO } from "../../dto/IGetIdUserDTO";
import { IGetNameUserDTO } from "../../dto/IGetNameUserDTO";
import { IUpdateUserDTO } from "../../dto/IUpdateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { IUpdatePasswordUserDTO } from "../../dto/IUpdatePasswordUserDTO";

class UserRepository implements IUserRepository {
	async create({
		email,
		name,
		password,
		is_adm,
	}: ICreateUserDTO): Promise<void> {
		await prismaClient.user.create({
			data: {
				email,
				name,
				password,
				is_adm,
			},
		});
	}

	async getAll(): Promise<User[]> {
		return await prismaClient.user.findMany();
	}

	async getEmail({ email }: IGetEmailUserDTO): Promise<User | null> {
		return await prismaClient.user.findFirst({
			where: {
				email,
			},
		});
	}

	async getId({ id }: IGetIdUserDTO): Promise<User | null> {
		return await prismaClient.user.findFirst({
			where: {
				id,
			},
		});
	}

	async getName({ name }: IGetNameUserDTO): Promise<User | null> {
		return await prismaClient.user.findFirst({
			where: {
				name,
			},
		});
	}

	async update({
		email,
		id,
		name,
		password,
		is_adm,
	}: IUpdateUserDTO): Promise<User> {
		return await prismaClient.user.update({
			where: {
				id,
			},
			data: {
				email,
				name,
				password,
				is_adm,
			},
		});
	}

	async updatePassword({
		id,
		password,
	}: IUpdatePasswordUserDTO): Promise<void> {
		await prismaClient.user.update({
			where: {
				id,
			},
			data: {
				password,
			},
		});
	}
}

export { UserRepository };
