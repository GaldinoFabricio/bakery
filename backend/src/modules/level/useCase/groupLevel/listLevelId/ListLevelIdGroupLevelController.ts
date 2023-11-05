import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLevelIdGroupLevelUseCase } from "./ListLevelIdGroupLevelUseCase";

class ListLevelIdGroupLevelController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { level_id } = request.params;

		const listLevelIdGroupLevelUseCase = container.resolve(
			ListLevelIdGroupLevelUseCase
		);
		const data = await listLevelIdGroupLevelUseCase.execute({ level_id });

		return response.status(200).send(data);
	}
}

export { ListLevelIdGroupLevelController };
