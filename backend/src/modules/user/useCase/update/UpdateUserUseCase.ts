import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateUserDTO } from "../../dto/user/IUpdateUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";

@injectable()
class UpdateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({
		email,
		id,
		name,
		password,
		is_adm,
	}: IUpdateUserDTO): Promise<User> {
		const passwordHash = await hash(password, 8);

		const data = await this.userRepository.update({
			email,
			id,
			name,
			password: passwordHash,
			is_adm,
		});

		return data;
	}
}

export { UpdateUserUseCase };
