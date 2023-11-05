import { Level } from "@prisma/client";
import { ICreateLevelDTO } from "../dto/level/ICreateLevelDTO";
import { IListIdLevelDTO } from "../dto/level/IListIdLevelDTO";
import { IListNameLevelDTO } from "../dto/level/IListNameLevelDTO";
import { IUpdateLevelDTO } from "../dto/level/IUpdateLevelDTO";

interface ILevelRepository {
	create(data: ICreateLevelDTO): Promise<void>;

	list(): Promise<Level[]>;

	listId({ id }: IListIdLevelDTO): Promise<Level | null>;

	listName({ name }: IListNameLevelDTO): Promise<Level | null>;

	update({ id, name }: IUpdateLevelDTO): Promise<Level>;
}

export { ILevelRepository };
