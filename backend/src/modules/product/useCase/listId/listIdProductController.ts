import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdProductUseCase } from "./listIdProductUseCase";

class ListIdProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listIdProductUseCase = container.resolve(ListIdProductUseCase);

    const data = await listIdProductUseCase.execute({id});

    return response.status(200).send(data);
  }
}

export { ListIdProductController }
