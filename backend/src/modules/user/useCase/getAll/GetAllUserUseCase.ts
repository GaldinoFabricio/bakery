import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repository/IUserRepository";

@injectable()
class GetAllUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute(): Promise<User[]> {
		return await this.userRepository.getAll();
	}
}

export { GetAllUserUseCase };
