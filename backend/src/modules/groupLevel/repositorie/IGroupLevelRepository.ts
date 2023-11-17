import { GroupLevel } from "@prisma/client";
import { ICreateGroupLevelDTO } from "../dto/ICreateGroupLevelDTO";
import { IListIdGroupLevelDTO } from "../dto/IListIdGroupLevelDTO";
import { IListLevelIdGroupLevelDTO } from "../dto/IListLevelIdGroupLevelDTO";
import { IListUserIdGroupLevelDTO } from "../dto/IListUserIdGroupLevelDTO";
import { IListUserLevelGroupLevelDTO } from "../dto/IListUserLevelGroupLevelDTO";
import { IUpdateGroupLevelDTO } from "../dto/IUpdateGroupLevelDTO";
import { IUpdateLevelGroupLevelDTO } from "../dto/IUpdateLevelGroupLevelDTO";

interface IGroupLevelRepository {
	create(data: ICreateGroupLevelDTO): Promise<void>;

	list(): Promise<GroupLevel[]>;

	listId({ id }: IListIdGroupLevelDTO): Promise<GroupLevel | null>;

	listLevelId({ level_id }: IListLevelIdGroupLevelDTO): Promise<GroupLevel[]>;

	listUserId({
		user_id,
	}: IListUserIdGroupLevelDTO): Promise<GroupLevel | null>;

	listUserLevel({
		level_id,
		user_id,
	}: IListUserLevelGroupLevelDTO): Promise<GroupLevel | null>;

	update({ id, level_id, user_id }: IUpdateGroupLevelDTO): Promise<GroupLevel>;

	updateLevel({
		id,
		level_id,
	}: IUpdateLevelGroupLevelDTO): Promise<GroupLevel>;
}

export { IGroupLevelRepository };
