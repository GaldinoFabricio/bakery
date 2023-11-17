import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IUserRepository } from "../../repository/IUserRepository";
import { IListNameUserDTO } from "../../dto/user/IListNameUserDTO";

@injectable()
class GetNameUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ name }: IListNameUserDTO): Promise<User | null> {
		return await this.userRepository.listName({ name });
	}
}

export { GetNameUserUseCase };
