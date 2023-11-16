import { Cart } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateCartDTO } from "../../dto/ICreateCartDTO";
import { IListIdCartDTO } from "../../dto/IListIdCartDTO";
import { IListUserIdCartDTO } from "../../dto/IListUserIdCartDTO";
import { ICartRepository } from "../ICartRepository";

class CartRepository implements ICartRepository {
	async create({
		amount,
		product_id,
		subTotal,
		user_id,
	}: ICreateCartDTO): Promise<void> {
		await prismaClient.cart.create({
			data: {
				amount,
				subTotal,
				product_id,
				user_id,
			},
		});
	}

	async list(): Promise<Cart[]> {
		return await prismaClient.cart.findMany();
	}

	async listId({ id }: IListIdCartDTO): Promise<Cart | null> {
		return await prismaClient.cart.findFirst({
			where: {
				id,
			},
		});
	}

	async listUserId({ user_id }: IListUserIdCartDTO): Promise<Cart | null> {
		return await prismaClient.cart.findFirst({
			where: {
				user_id,
			},
		});
	}
}

export { CartRepository };
