import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEmailUserUseCase } from "./listEmailUserUseCase";

class ListEmailUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const listEmailUserUseCase = container.resolve(ListEmailUserUseCase);

    const data = await listEmailUserUseCase.execute({ email });

    return response.status(200).send(data);
  }
}

export { ListEmailUserController }
