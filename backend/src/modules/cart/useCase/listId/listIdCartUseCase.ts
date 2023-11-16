import { Cart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListIdCartDTO } from "../../dto/IListIdCartDTO";
import { ICartRepository } from "../../repositorie/ICartRepository";

@injectable()
class ListIdCartUseCase {
	constructor(
		@inject("CartRepository")
		private cartRepository: ICartRepository
	) {}

	async execute({ id }: IListIdCartDTO): Promise<Cart> {
		if (!id) {
			throw new AppError("Cart not informed", 400);
		}

		const data = await this.cartRepository.listId({
			id,
		});

		return data;
	}
}

export { ListIdCartUseCase };
