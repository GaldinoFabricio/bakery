import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./updateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {amount,description,id,name,value} = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    const data = await updateProductUseCase.execute({amount,description,id,name,value});

    return response.status(201).send(data);
  }
}

export { UpdateProductController }
