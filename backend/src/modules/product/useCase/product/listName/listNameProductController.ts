import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNameProductUseCase } from "./listNameProductUseCase";

class ListNameProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const listNameProductUseCase = container.resolve(ListNameProductUseCase);

    const data = await listNameProductUseCase.execute({name});

    return response.status(200).send(data);
  }
}

export { ListNameProductController }
