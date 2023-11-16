import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dto/ICreateProductDTO";
import { IListIdProductDTO } from "../dto/IListIdProductDTO";
import { IListNameProductDTO } from "../dto/IListNameProductDTO";
import { IUpdateProductDTO } from "../dto/IUpdateProductDTO";

interface IProductRepository {
	create(data: ICreateProductDTO): Promise<void>;

	list(): Promise<Product[]>;

	listId({ id }: IListIdProductDTO): Promise<Product | null>;

	listName({ name }: IListNameProductDTO): Promise<Product | null>;

	update(data: IUpdateProductDTO): Promise<Product>;
}

export { IProductRepository };
