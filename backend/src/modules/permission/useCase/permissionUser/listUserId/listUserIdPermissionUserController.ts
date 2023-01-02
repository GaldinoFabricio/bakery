import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdPermissionUserUseCase } from "./listUserIdPermissionUserUseCase";

class ListUserIdPermissionUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listUserIdPermissionUserUseCase = container.resolve(ListUserIdPermissionUserUseCase);

    const data = await listUserIdPermissionUserUseCase.execute({ user_id });

    return response.status(200).send(data);
  }
}

export { ListUserIdPermissionUserController }
