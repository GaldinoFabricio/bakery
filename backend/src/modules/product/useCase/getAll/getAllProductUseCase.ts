import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class GetAllProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute(): Promise<Product[]> {
		return await this.productRepository.list();
	}
}

export { GetAllProductUseCase };
