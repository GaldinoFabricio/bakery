import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repository/IUserRepository";
import { IGetNameUserDTO } from "../../dto/IGetNameUserDTO";

@injectable()
class GetNameUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ name }: IGetNameUserDTO): Promise<User | null> {
		return await this.userRepository.getName({ name });
	}
}

export { GetNameUserUseCase };
