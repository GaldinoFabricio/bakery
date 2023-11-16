import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLevelUseCase } from "./CreateLevelUseCase";

class CreateLevelController {
	async handle(
		request: Request<any, any, { name: string }>,
		response: Response
	): Promise<Response> {
		const { name } = request.body;

		const createLevelUseCase = container.resolve(CreateLevelUseCase);
		await createLevelUseCase.execute({ name });

		return response.status(201).send();
	}
}

export { CreateLevelController };
