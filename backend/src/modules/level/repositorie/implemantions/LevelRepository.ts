import { Level } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateLevelDTO } from "../../dto/ICreateLevelDTO";
import { ILevelRepository } from "../ILevelRepository";
import { IListIdLevelDTO } from "../../dto/IListIdLevelDTO";
import { IListNameLevelDTO } from "../../dto/IListNameLevelDTO";
import { IUpdateLevelDTO } from "../../dto/IUpdateLevelDTO";

class LevelRepository implements ILevelRepository {
	async create(data: ICreateLevelDTO): Promise<void> {
		await prismaClient.level.create({ data });
	}

	async list(): Promise<Level[]> {
		return await prismaClient.level.findMany();
	}

	async listId({ id }: IListIdLevelDTO): Promise<Level | null> {
		return await prismaClient.level.findFirst({ where: { id } });
	}

	async listName({ name }: IListNameLevelDTO): Promise<Level | null> {
		return await prismaClient.level.findFirst({ where: { name } });
	}

	async update({ id, name }: IUpdateLevelDTO): Promise<Level> {
		return await prismaClient.level.update({ where: { id }, data: { name } });
	}
}

export { LevelRepository };
