import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPermissionUserUseCase } from "./listPermissionUserUseCase";

class ListPermissionUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPermissionUserUseCase = container.resolve(ListPermissionUserUseCase);

    const data = await listPermissionUserUseCase.execute();

    return response.status(200).send(data);
  }
}

export { ListPermissionUserController }
