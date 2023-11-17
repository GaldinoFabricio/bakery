import { GroupLevel } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateGroupLevelDTO } from "../../dto/ICreateGroupLevelDTO";
import { IGroupLevelRepository } from "../IGroupLevelRepository";
import { IListIdGroupLevelDTO } from "../../dto/IListIdGroupLevelDTO";
import { IListLevelIdGroupLevelDTO } from "../../dto/IListLevelIdGroupLevelDTO";
import { IListUserIdGroupLevelDTO } from "../../dto/IListUserIdGroupLevelDTO";
import { IListUserLevelGroupLevelDTO } from "../../dto/IListUserLevelGroupLevelDTO";
import { IUpdateGroupLevelDTO } from "../../dto/IUpdateGroupLevelDTO";
import { IUpdateLevelGroupLevelDTO } from "../../dto/IUpdateLevelGroupLevelDTO";

class GroupLevelRepository implements IGroupLevelRepository {
	async create(data: ICreateGroupLevelDTO): Promise<void> {
		await prismaClient.groupLevel.create({ data });
	}

	async list(): Promise<GroupLevel[]> {
		return await prismaClient.groupLevel.findMany();
	}

	async listId({ id }: IListIdGroupLevelDTO): Promise<GroupLevel | null> {
		return await prismaClient.groupLevel.findFirst({ where: { id } });
	}

	async listLevelId({
		level_id,
	}: IListLevelIdGroupLevelDTO): Promise<GroupLevel[]> {
		return await prismaClient.groupLevel.findMany({ where: { level_id } });
	}

	async listUserId({
		user_id,
	}: IListUserIdGroupLevelDTO): Promise<GroupLevel | null> {
		return await prismaClient.groupLevel.findFirst({ where: { user_id } });
	}

	async listUserLevel({
		level_id,
		user_id,
	}: IListUserLevelGroupLevelDTO): Promise<GroupLevel | null> {
		return await prismaClient.groupLevel.findFirst({
			where: { level_id, user_id },
		});
	}

	async update({
		id,
		level_id,
		user_id,
	}: IUpdateGroupLevelDTO): Promise<GroupLevel> {
		return await prismaClient.groupLevel.update({
			where: { id },
			data: { level_id, user_id },
		});
	}

	async updateLevel({
		id,
		level_id,
	}: IUpdateLevelGroupLevelDTO): Promise<GroupLevel> {
		return await prismaClient.groupLevel.update({
			where: { id },
			data: { level_id },
		});
	}
}

export { GroupLevelRepository };
