import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateProductDTO } from "../../dto/IUpdateProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class UpdateProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({
		amount,
		description,
		id,
		name,
		value,
	}: IUpdateProductDTO): Promise<Product> {
		return await this.productRepository.update({
			amount,
			description,
			id,
			name,
			value,
		});
	}
}

export { UpdateProductUseCase };
