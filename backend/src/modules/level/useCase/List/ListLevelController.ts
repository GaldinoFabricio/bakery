import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLevelUseCase } from "./ListLevelUseCase";

class ListLevelController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listLevelUseCase = container.resolve(ListLevelUseCase);
		const data = await listLevelUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListLevelController };
