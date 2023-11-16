import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCartUseCase } from "./createCartUseCase";

class CreateCartController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {amount,product_id,subTotal,user_id} = request.body;

    const createCartUseCase = container.resolve(CreateCartUseCase);

    await createCartUseCase.execute({amount,product_id,subTotal,user_id});

    return response.status(201).send();
  }
}

export { CreateCartController }
