import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {amount,description,name,value} = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({amount,description,name,value});

    return response.status(201).send();
  }
}

export { CreateProductController }
