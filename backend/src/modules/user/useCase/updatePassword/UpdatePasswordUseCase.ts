import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repository/IUserRepository";
import { User } from "@prisma/client";
import { IUpdatePasswordUserDTO } from "../../dto/IUpdatePasswordUserDTO";
import PasswordValidator from "password-validator";
import AppError from "../../../../shared/errors/AppErrors";
import { hash } from "bcrypt";

@injectable()
class UpdatePasswordUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ id, password }: IUpdatePasswordUserDTO): Promise<void> {
		const schema = new PasswordValidator();
		schema
			.is()
			.min(8)
			.is()
			.max(100)
			.has()
			.uppercase()
			.has()
			.lowercase()
			.has()
			.digits(2)
			.has()
			.not()
			.spaces()
			.is()
			.not()
			.oneOf(["Passw0rd", "Password123", "1234568"]);
		if (schema.validate(password)) {
			throw new AppError("password incorrect", 404);
		}

		const passwordHash = await hash(password, 8);

		await this.userRepository.updatePassword({
			id,
			password: passwordHash,
		});
	}
}

export { UpdatePasswordUserUseCase };
