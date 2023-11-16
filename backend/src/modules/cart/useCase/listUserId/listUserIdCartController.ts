import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdCartUseCase } from "./listUserIdCartUseCase";

class ListUserIdCartController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listUserIdUseCase = container.resolve(ListUserIdCartUseCase);

    const data = await listUserIdUseCase.execute({user_id});


    return response.status(200).send(data);
  }
}

export { ListUserIdCartController }
