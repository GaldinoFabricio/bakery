import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dto/product/ICreateProductDTO";
import { IListIdProductDTO } from "../dto/product/IListIdProductDTO";
import { IListNameProductDTO } from "../dto/product/IListNameProductDTO";
import { IUpdateProductDTO } from "../dto/product/IUpdateProductDTO";

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;

  list(): Promise<Product[]>;

  listId({ id }: IListIdProductDTO): Promise<Product | null>;

  listName({ name }: IListNameProductDTO): Promise<Product | null>;

  update(data: IUpdateProductDTO): Promise<Product>;
}

export { IProductRepository }