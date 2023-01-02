import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdPermissionUserUseCase } from "./listIdPermissionUserUseCase";

class ListIdPermissionUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listIdPermissionUserUseCase = container.resolve(ListIdPermissionUserUseCase);

    const data = await listIdPermissionUserUseCase.execute({ id });

    return response.status(200).send(data);
  }
}

export { ListIdPermissionUserController }
