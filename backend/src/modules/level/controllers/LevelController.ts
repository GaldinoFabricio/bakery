import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLevelUseCase } from "../useCase/create/CreateLevelUseCase";
import { GetAllLevelUseCase } from "../useCase/getAll/GetAllLevelUseCase";
import { UpdatelevelUseCase } from "../useCase/update/UpdateLevelUseCase";

class LevelController {
	async createLevel(
		request: Request<any, any, { name: string }>,
		response: Response
	): Promise<Response> {
		const { name } = request.body;

		const createLevelUseCase = container.resolve(CreateLevelUseCase);
		await createLevelUseCase.execute({ name });

		return response.status(201).send();
	}

	async getAll(request: Request, response: Response): Promise<Response> {
		const getAllLevelUseCase = container.resolve(GetAllLevelUseCase);
		const data = await getAllLevelUseCase.execute();

		return response.status(200).send(data);
	}

	async update(
		request: Request<any, any, { id: string; name: string }>,
		response: Response
	): Promise<Response> {
		const { id, name } = request.body;

		const updateLevelUseCase = container.resolve(UpdatelevelUseCase);
		const data = await updateLevelUseCase.execute({ id, name });

		return response.status(201).send(data);
	}
}

export { LevelController };
