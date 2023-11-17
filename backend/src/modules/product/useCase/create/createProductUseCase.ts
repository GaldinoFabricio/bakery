import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { ICreateProductDTO } from "../../dto/ICreateProductDTO";
import { IProductRepository } from "../../repository/IProductRepository";

@injectable()
class CreateProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	async execute({
		amount,
		description,
		name,
		value,
	}: ICreateProductDTO): Promise<void> {
		await this.productRepository.create({
			amount,
			description,
			name,
			value,
		});
	}
}

export { CreateProductUseCase };
