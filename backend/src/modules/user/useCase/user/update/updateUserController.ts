import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./updateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, id, name, password, is_adm } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const data = await updateUserUseCase.execute({ email, id, name, password, is_adm });

    return response.status(201).send(data);
  }
}

export { UpdateUserController }
