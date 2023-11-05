import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGroupLevelUseCase } from "./ListGroupLevelUseCase";

class ListGroupLevelController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listGroupLevelUseCase = container.resolve(ListGroupLevelUseCase);
		const data = await listGroupLevelUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListGroupLevelController };
