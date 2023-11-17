import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IListIdUserDTO } from "../../dto/user/IListIdUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";

@injectable()
class GetIdUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ id }: IListIdUserDTO): Promise<User | null> {
		if (!id) {
			throw new AppError("Id not informed", 400);
		}

		return await this.userRepository.listId({ id });
	}
}

export { GetIdUserUseCase };
