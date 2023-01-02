import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductUseCase } from "./listProductUseCase";

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductUsecase = container.resolve(ListProductUseCase);

    const data = await listProductUsecase.execute();

    return response.status(200).send(data);
  }
}

export { ListProductController }
