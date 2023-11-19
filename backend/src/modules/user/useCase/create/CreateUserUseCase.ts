import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({
		email,
		name,
		password,
		is_adm,
	}: ICreateUserDTO): Promise<void> {
		const verifyEmail = await this.userRepository.getEmail({ email });
		if (verifyEmail) {
			throw new AppError("User already exist", 400);
		}

		const passwordHash = await hash(password, 8);

		await this.userRepository.create({
			email,
			name,
			password: passwordHash,
			is_adm,
		});
	}
}

export { CreateUserUseCase };
