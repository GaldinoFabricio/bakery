import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListIdProductDTO } from "../../dto/IListIdProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class ListIdProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({ id }: IListIdProductDTO): Promise<Product> {
		if (!id) {
			throw new AppError("Product not informed", 400);
		}

		const data = await this.productRepository.listId({ id });

		return data;
	}
}

export { ListIdProductUseCase };
