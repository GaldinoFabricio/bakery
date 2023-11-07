import { Cart } from "@prisma/client";
import { ICreateCartDTO } from "../dto/cart/ICreateCartDTO";
import { IListIdCartDTO } from "../dto/cart/IListIdCartDTO";
import { IListUserIdCartDTO } from "../dto/cart/IListUserIdCartDTO";

interface ICartRepository {
	create(data: ICreateCartDTO): Promise<void>;

	list(): Promise<Cart[]>;

	listId({ id }: IListIdCartDTO): Promise<Cart | null>;

	listUserId({ user_id }: IListUserIdCartDTO): Promise<Cart | null>;
}

export { ICartRepository };
