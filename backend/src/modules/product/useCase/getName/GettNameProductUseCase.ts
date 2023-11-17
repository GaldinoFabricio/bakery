import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListNameProductDTO } from "../../dto/IListNameProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class GetNameProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({ name }: IListNameProductDTO): Promise<Product | null> {
		return await this.productRepository.listName({ name });
	}
}

export { GetNameProductUseCase };
