import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCartUseCase } from "./listCartUseCase";

class ListCartController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCartUseCase = container.resolve(ListCartUseCase);

    const data = await listCartUseCase.execute();

    return response.status(200).send(data);
  }
}

export { ListCartController }
