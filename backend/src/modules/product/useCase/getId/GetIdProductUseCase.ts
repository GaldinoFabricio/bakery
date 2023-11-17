import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListIdProductDTO } from "../../dto/IListIdProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class GetIdProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({ id }: IListIdProductDTO): Promise<Product | null> {
		return await this.productRepository.listId({ id });
	}
}

export { GetIdProductUseCase };
