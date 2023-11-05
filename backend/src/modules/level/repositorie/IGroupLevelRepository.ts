import { GroupLevel } from "@prisma/client";
import { ICreateGroupLevelDTO } from "../dto/groupLevel/ICreateGroupLevelDTO";
import { IListIdGroupLevelDTO } from "../dto/groupLevel/IListIdGroupLevelDTO";
import { IListLevelIdGroupLevelDTO } from "../dto/groupLevel/IListLevelIdGroupLevelDTO";
import { IListUserIdGroupLevelDTO } from "../dto/groupLevel/IListUserIdGroupLevelDTO";
import { IListUserLevelGroupLevelDTO } from "../dto/groupLevel/IListUserLevelGroupLevelDTO";
import { IUpdateGroupLevelDTO } from "../dto/groupLevel/IUpdateGroupLevelDTO";
import { IUpdateLevelGroupLevelDTO } from "../dto/groupLevel/IUpdateLevelGroupLevelDTO";

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
