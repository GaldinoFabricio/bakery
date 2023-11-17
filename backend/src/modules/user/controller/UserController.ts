import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "../useCase/authenticate/AuthenticateUserUseCase";
import { CreateUserUseCase } from "../useCase/create/CreateUserUseCase";
import { GetAllUserUseCase } from "../useCase/getAll/GetAllUserUseCase";
import { GetIdUserUseCase } from "../useCase/getId/GetIdUserUseCase";
import { GetMyUserUseCase } from "../useCase/getMy/GetMyUserUseCase";
import { UpdateUserUseCase } from "../useCase/update/UpdateUserUseCase";
import { GetNameUserUseCase } from "../useCase/getName/GetNameUserUseCase";

class UserController {
	async authenticateUser(
		request: Request,
		response: Response
	): Promise<Response> {
		const { email, password } = request.body;

		const authenticateUserUseCase = container.resolve(
			AuthenticateUserUseCase
		);

		const data = await authenticateUserUseCase.execute({ email, password });

		return response.status(200).send(data);
	}

	async createUser(
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

	async getAll(request: Request, response: Response): Promise<Response> {
		const getAllUserUseCase = container.resolve(GetAllUserUseCase);

		const data = await getAllUserUseCase.execute();

		return response.status(200).send(data);
	}

	async getId(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const getIdUserUseCase = container.resolve(GetIdUserUseCase);

		const data = await getIdUserUseCase.execute({ id });

		return response.status(200).send(data);
	}

	async getMy(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const getMyUserUseCase = container.resolve(GetMyUserUseCase);
		const data = await getMyUserUseCase.execute({ id });

		return response.status(200).send(data);
	}

	async getName(request: Request, response: Response): Promise<Response> {
		const { name } = request.body;

		const getNameUserUseCase = container.resolve(GetNameUserUseCase);

		const data = await getNameUserUseCase.execute({ name });

		return response.status(200).send(data);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const { email, id, name, password, is_adm } = request.body;

		const updateUserUseCase = container.resolve(UpdateUserUseCase);

		const data = await updateUserUseCase.execute({
			email,
			id,
			name,
			password,
			is_adm,
		});

		return response.status(201).send(data);
	}
}

export { UserController };
