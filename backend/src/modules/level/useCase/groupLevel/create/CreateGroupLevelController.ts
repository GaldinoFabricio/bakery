import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupLevelUseCase } from "./CreateGroupLevelUseCase";

class CreateGroupLevelController {
	async handle(
		request: Request<any, any, { level_id: string; user_id: string }>,
		response: Response
	): Promise<Response> {
		const { level_id, user_id } = request.body;

		const createGroupLevelUseCase = container.resolve(
			CreateGroupLevelUseCase
		);
		await createGroupLevelUseCase.execute({ level_id, user_id });

		return response.status(201).send();
	}
}

export { CreateGroupLevelController };
