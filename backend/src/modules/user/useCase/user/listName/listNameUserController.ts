import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNameUserUseCase } from "./listNameUserUseCase";

class ListNameUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const listNameUserUseCase = container.resolve(ListNameUserUseCase);

    const data = await listNameUserUseCase.execute({ name });

    return response.status(200).send(data);
  }
}

export { ListNameUserController }