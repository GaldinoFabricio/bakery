import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { GenerateTokenProvider } from "../../../../../provider/GenerateTokenProvider";
import AppError from "../../../../../shared/errors/AppErrors";
import { validatePassword } from "../../../../../shared/libs/validatePassword";
import { KEY_TOKEN } from "../../../../../shared/utils/environment";
import { IAuthenticateUserDTO } from "../../../dto/user/IAuthenticateUserDTO";
import { IUserRepository } from "../../../repository/IUserRepository";

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
		if (!email || !password) {
			throw new AppError("Email/Password not informed", 400);
		}
		const data = await this.userRepository.listEmail({ email });

		if (!data) {
			throw new AppError("Email or password incorrect", 401);
		}

		if (!(await validatePassword(password))) {
			throw new AppError("Password invalid", 401);
		}

		const passwordMatch = await compare(password, data.password);

		if (!passwordMatch) {
			throw new AppError("Email or password incorrect", 401);
		}

		const generateTokenProvider = new GenerateTokenProvider();

		const token = await generateTokenProvider.execute(data.id);

		const tokenReturn = {
			token,
			name: data.name,
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
