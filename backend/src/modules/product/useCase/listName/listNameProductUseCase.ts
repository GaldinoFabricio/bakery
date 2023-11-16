import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListNameProductDTO } from "../../dto/IListNameProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class ListNameProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({ name }: IListNameProductDTO): Promise<Product> {
		if (!name) {
			throw new AppError("Name not informed", 400);
		}

		const data = await this.productRepository.listName({ name });

		return data;
	}
}

export { ListNameProductUseCase };
