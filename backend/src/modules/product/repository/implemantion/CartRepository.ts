import { Cart } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateCartDTO } from "../../dto/cart/ICreateCartDTO";
import { IListIdCartDTO } from "../../dto/cart/IListIdCartDTO";
import { IListUserIdCartDTO } from "../../dto/cart/IListUserIdCartDTO";
import { ICartRepository } from "../ICartRepository";

class CartRepository implements ICartRepository {
	private repository;

	constructor() {
		this.repository = prismaClient.cart;
	}

	async create({
		amount,
		product_id,
		subTotal,
		user_id,
	}: ICreateCartDTO): Promise<void> {
		await this.repository.create({
			data: {
				amount,
				subTotal,
				product_id,
				user_id,
			},
		});
	}

	async list(): Promise<Cart[]> {
		const data = await this.repository.findMany();

		return data;
	}

	async listId({ id }: IListIdCartDTO): Promise<Cart | null> {
		const data = await this.repository.findFirst({
			where: {
				id,
			},
		});

		return data;
	}

	async listUserId({ user_id }: IListUserIdCartDTO): Promise<Cart[]> {
		const data = await this.repository.findMany({
			where: {
				user_id,
			},
		});

		return data;
	}
}

export { CartRepository };
