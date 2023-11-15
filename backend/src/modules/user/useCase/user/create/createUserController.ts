import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
	async handle(
		request: Request<
			any,
			any,
			{ name: string; email: string; password: string; is_adm: boolean }
		>,
		response: Response
	): Promise<Response> {
		const { email, name, password, is_adm } = request.body;

		const createUserUseCase = container.resolve(CreateUserUseCase);

		await createUserUseCase.execute({ email, name, password, is_adm });

		return response.status(201).send();
	}
}

export { CreateUserController };
