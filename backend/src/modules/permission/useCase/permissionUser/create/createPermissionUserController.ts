import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePermissionUserUseCase } from "./createPermissionUserUseCase";

class CreatePermissionUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createPermissionUserUseCase = container.resolve(CreatePermissionUserUseCase);

    await createPermissionUserUseCase.execute({ user_id });

    return response.status(201).send();
  }
}

export { CreatePermissionUserController }
