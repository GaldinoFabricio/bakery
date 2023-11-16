import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatelevelUseCase } from "./UpdateLevelUseCase";

class UpdateLevelController {
	async handle(
		request: Request<any, any, { id: string; name: string }>,
		response: Response
	): Promise<Response> {
		const { id, name } = request.body;

		const updateLevelUseCase = container.resolve(UpdatelevelUseCase);
		const data = await updateLevelUseCase.execute({ id, name });

		return response.status(201).send(data);
	}
}

export { UpdateLevelController };
