import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMyCartUseCase } from "./ListMyCartUseCase";

class ListMyCartController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const listMyCartUseCase = container.resolve(ListMyCartUseCase);
		const data = await listMyCartUseCase.execute({ user_id: id });

		if (data === null) {
			return response.status(204).send();
		}

		return response.status(200).send(data);
	}
}

export { ListMyCartController };
