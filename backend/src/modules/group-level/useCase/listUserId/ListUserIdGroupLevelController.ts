import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdGroupLevelUseCase } from "./ListUserIdGroupLevelUseCase";

class ListUserIdGroupLevelController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const listUserIdGroupLevelUseCase = container.resolve(
			ListUserIdGroupLevelUseCase
		);
		const data = await listUserIdGroupLevelUseCase.execute({ user_id });

		return response.status(200).send(data);
	}
}

export { ListUserIdGroupLevelController };
