import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdCartUseCase } from "./listIdCartUseCase";

class ListIdCartController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listIdCartUseCase = container.resolve(ListIdCartUseCase);

    const data = await listIdCartUseCase.execute({id});

    return response.status(200).send(data);
  }
}

export { ListIdCartController }
