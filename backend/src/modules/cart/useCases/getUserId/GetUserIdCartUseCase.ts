import { Cart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListUserIdCartDTO } from "../../dto/IListUserIdCartDTO";
import { ICartRepository } from "../../repositorie/ICartRepository";

@injectable()
class GetUserIdCartUseCase {
	constructor(
		@inject("CartRepository")
		private cartRepository: ICartRepository
	) {}

	async execute({ user_id }: IListUserIdCartDTO): Promise<Cart | null> {
		if (!user_id) {
			throw new AppError("User not informed", 400);
		}

		const data = await this.cartRepository.listUserId({ user_id });

		return data;
	}
}

export { GetUserIdCartUseCase };
