import { Level } from "@prisma/client";
import { ICreateLevelDTO } from "../dto/ICreateLevelDTO";
import { IListIdLevelDTO } from "../dto/IListIdLevelDTO";
import { IListNameLevelDTO } from "../dto/IListNameLevelDTO";
import { IUpdateLevelDTO } from "../dto/IUpdateLevelDTO";

interface ILevelRepository {
	create(data: ICreateLevelDTO): Promise<void>;

	list(): Promise<Level[]>;

	listId({ id }: IListIdLevelDTO): Promise<Level | null>;

	listName({ name }: IListNameLevelDTO): Promise<Level | null>;

	update({ id, name }: IUpdateLevelDTO): Promise<Level>;
}

export { ILevelRepository };
