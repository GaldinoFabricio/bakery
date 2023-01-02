import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePermissionUserUseCase } from "./updatePermissionUserUseCase";

class UpdatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user_id } = request.body;

    const updatePermissionUserUseCase = container.resolve(UpdatePermissionUserUseCase);

    const data = await updatePermissionUserUseCase.execute({ id, user_id });

    return response.status(201).send(data);
  }
}

export { UpdatePermissionController }
