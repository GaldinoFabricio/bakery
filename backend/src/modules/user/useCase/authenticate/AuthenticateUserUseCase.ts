import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { GenerateTokenProvider } from "../../../../provider/GenerateTokenProvider";
import AppError from "../../../../shared/errors/AppErrors";
import { validatePassword } from "../../../../shared/libs/validatePassword";
import { IAuthenticateUserDTO } from "../../dto/IAuthenticateUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";
import PasswordValidator from "password-validator";

interface IResponse {
	token: string;
	name: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({
		email,
		password,
	}: IAuthenticateUserDTO): Promise<IResponse> {
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
			throw new AppError("Email or password incorrect", 401);
		}

		const verifyEmail = await this.userRepository.getEmail({ email });
		if (!verifyEmail) {
			throw new AppError("Email or password incorrect", 401);
		}

		const passwordMatch = await compare(password, verifyEmail.password);
		if (!passwordMatch) {
			throw new AppError("Email or password incorrect", 401);
		}

		const generateTokenProvider = new GenerateTokenProvider();
		const token = await generateTokenProvider.execute(verifyEmail.id);

		const tokenReturn = {
			token,
			name: verifyEmail.name,
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
