import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateGroupLevelUseCase } from "./UpdateGroupLevelUseCase";

class UpdateGroupLevelController {
	async handle(
		request: Request<
			any,
			any,
			{ id: string; level_id?: string; user_id?: string }
		>,
		response: Response
	): Promise<Response> {
		const { id, level_id, user_id } = request.body;

		const updateGroupLevelUseCase = container.resolve(
			UpdateGroupLevelUseCase
		);
		const data = await updateGroupLevelUseCase.execute({
			id,
			level_id,
			user_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateGroupLevelController };
