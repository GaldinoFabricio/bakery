import { Product } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateProductDTO } from "../../dto/ICreateProductDTO";
import { IListIdProductDTO } from "../../dto/IListIdProductDTO";
import { IListNameProductDTO } from "../../dto/IListNameProductDTO";
import { IUpdateProductDTO } from "../../dto/IUpdateProductDTO";
import { IProductRepository } from "../IProductRepository";

class ProductRepository implements IProductRepository {
	private repository;

	constructor() {
		this.repository = prismaClient.product;
	}

	async create({
		amount,
		description,
		name,
		value,
	}: ICreateProductDTO): Promise<void> {
		await this.repository.create({
			data: {
				amount,
				description,
				name,
				value,
			},
		});
	}

	async list(): Promise<Product[]> {
		const data = await this.repository.findMany();

		return data;
	}

	async listId({ id }: IListIdProductDTO): Promise<Product | null> {
		const data = await this.repository.findFirst({
			where: {
				id,
			},
		});

		return data;
	}

	async listName({ name }: IListNameProductDTO): Promise<Product | null> {
		const data = await this.repository.findFirst({
			where: {
				name,
			},
		});

		return data;
	}

	async update({
		amount,
		description,
		id,
		name,
		value,
	}: IUpdateProductDTO): Promise<Product> {
		const data = await this.repository.update({
			where: {
				id,
			},
			data: {
				amount,
				name,
				value,
				description,
			},
		});

		return data;
	}
}

export { ProductRepository };
