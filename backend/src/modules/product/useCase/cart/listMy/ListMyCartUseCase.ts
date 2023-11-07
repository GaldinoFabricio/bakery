import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../../../repository/ICartRepository";
import { IListUserIdCartDTO } from "../../../dto/cart/IListUserIdCartDTO";
import { Cart } from "@prisma/client";

@injectable()
class ListMyCartUseCase {
	constructor(
		@inject("CartRepository")
		private cartRepository: ICartRepository
	) {}

	async execute({ user_id }: IListUserIdCartDTO): Promise<Cart | null> {
		return await this.cartRepository.listUserId({ user_id });
	}
}

export { ListMyCartUseCase };
