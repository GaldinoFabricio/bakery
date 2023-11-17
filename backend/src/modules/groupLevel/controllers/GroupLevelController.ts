import { Request, Response } from "express";
import { CreateGroupLevelUseCase } from "../useCase/create/CreateGroupLevelUseCase";
import { container } from "tsyringe";
import { GetAllGroupLevelUseCase } from "../useCase/getAll/GetAllGroupLevelUseCase";
import { GetLevelIdGroupLevelUseCase } from "../useCase/getLevelId/GetLevelIdGroupLevelUseCase";
import { GetUserIdGroupLevelUseCase } from "../useCase/getUserId/GettUserIdGroupLevelUseCase";
import { UpdateGroupLevelUseCase } from "../useCase/update/UpdateGroupLevelUseCase";
import { UpdateLevelGroupLevelUseCase } from "../useCase/updateLevel/UpdateLevelGroupLevelUseCase";

class GroupLevelController {
	async createGroupLeveL(
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

	async getAllGroupLevel(
		request: Request,
		response: Response
	): Promise<Response> {
		const getAllGroupLevelUseCase = container.resolve(
			GetAllGroupLevelUseCase
		);
		const data = await getAllGroupLevelUseCase.execute();

		return response.status(200).send(data);
	}

	async getLevelId(request: Request, response: Response): Promise<Response> {
		const { level_id } = request.params;

		const getLevelIdGroupLevelUseCase = container.resolve(
			GetLevelIdGroupLevelUseCase
		);
		const data = await getLevelIdGroupLevelUseCase.execute({ level_id });

		return response.status(200).send(data);
	}

	async getUserId(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const getUserIdGroupLevelUseCase = container.resolve(
			GetUserIdGroupLevelUseCase
		);
		const data = await getUserIdGroupLevelUseCase.execute({ user_id });

		return response.status(200).send(data);
	}

	async updateGroupLevel(
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

	async updateLevel(
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

export { GroupLevelController };
