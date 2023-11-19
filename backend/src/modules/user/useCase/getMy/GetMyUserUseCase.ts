import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repository/IUserRepository";
import { User } from "@prisma/client";
import { IGetIdUserDTO } from "../../dto/IGetIdUserDTO";

@injectable()
class GetMyUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ id }: IGetIdUserDTO): Promise<User | null> {
		return await this.userRepository.getId({ id });
	}
}

export { GetMyUserUseCase };
