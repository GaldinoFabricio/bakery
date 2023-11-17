import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "../useCase/create/CreateProductUseCase";
import { GetAllProductUseCase } from "../useCase/getAll/getAllProductUseCase";
import { GetIdProductUseCase } from "../useCase/getId/GetIdProductUseCase";
import { GetNameProductUseCase } from "../useCase/getName/GettNameProductUseCase";
import { UpdateProductUseCase } from "../useCase/update/UpdateProductUseCase";

class ProductController {
	async createProduct(
		request: Request,
		response: Response
	): Promise<Response> {
		const { amount, description, name, value } = request.body;

		const createProductUseCase = container.resolve(CreateProductUseCase);

		await createProductUseCase.execute({ amount, description, name, value });

		return response.status(201).send();
	}

	async getAll(request: Request, response: Response): Promise<Response> {
		const getAllProductUsecase = container.resolve(GetAllProductUseCase);

		const data = await getAllProductUsecase.execute();

		return response.status(200).send(data);
	}

	async getId(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const getIdProductUseCase = container.resolve(GetIdProductUseCase);

		const data = await getIdProductUseCase.execute({ id });

		return response.status(200).send(data);
	}

	async getName(request: Request, response: Response): Promise<Response> {
		const { name } = request.params;

		const getNameProductUseCase = container.resolve(GetNameProductUseCase);

		const data = await getNameProductUseCase.execute({ name });

		return response.status(200).send(data);
	}

	async updateProduct(
		request: Request,
		response: Response
	): Promise<Response> {
		const { amount, description, id, name, value } = request.body;

		const updateProductUseCase = container.resolve(UpdateProductUseCase);

		const data = await updateProductUseCase.execute({
			amount,
			description,
			id,
			name,
			value,
		});

		return response.status(201).send(data);
	}
}

export { ProductController };
