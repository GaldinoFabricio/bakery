import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLevelGroupLevelUseCase } from "./UpdateLevelGroupLevelUseCase";

class UpdateLevelGroupLevelController {
	async handle(
		request: Request<any, any, { id: string; level_id: string }>,
		response: Response
	): Promise<Response> {
		const { id, level_id } = request.body;

		const updateLevelGroupLevelUseCase = container.resolve(
			UpdateLevelGroupLevelUseCase
		);
		const data = await updateLevelGroupLevelUseCase.execute({
			id,
			level_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateLevelGroupLevelController };
