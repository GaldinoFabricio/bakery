import { Request, Response } from "express";
import { CreateCartUseCase } from "../useCases/create/CreateCartUseCase";
import { container } from "tsyringe";
import { GetAllCartUseCase } from "../useCases/getAll/GetAllCartUseCase";
import { GetIdCartUseCase } from "../useCases/getId/GetIdCartUseCase";
import { GetMyCartUseCase } from "../useCases/getMy/GetMyCartUseCase";
import { GetUserIdCartUseCase } from "../useCases/getUserId/GetUserIdCartUseCase";

class CartController {
	async createCart(request: Request, response: Response): Promise<Response> {
		const { amount, product_id, subTotal, user_id } = request.body;

		const createCartUseCase = container.resolve(CreateCartUseCase);

		await createCartUseCase.execute({
			amount,
			product_id,
			subTotal,
			user_id,
		});

		return response.status(201).send();
	}

	async getAll(request: Request, response: Response): Promise<Response> {
		const getAllCartServices = container.resolve(GetAllCartUseCase);

		const data = await getAllCartServices.execute();

		return response.status(200).send(data);
	}

	async getId(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const getIdCartUseCase = container.resolve(GetIdCartUseCase);

		const data = await getIdCartUseCase.execute({ id });

		return response.status(200).send(data);
	}

	async getMy(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const getMyCartUseCase = container.resolve(GetMyCartUseCase);
		const data = await getMyCartUseCase.execute({ user_id: id });

		if (data === null) {
			return response.status(204).send();
		}

		return response.status(200).send(data);
	}

	async getUserId(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const getUserIdServices = container.resolve(GetUserIdCartUseCase);

		const data = await getUserIdServices.execute({ user_id });

		return response.status(200).send(data);
	}
}

export { CartController };
