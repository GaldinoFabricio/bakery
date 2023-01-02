import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../../shared/errors/AppErrors";
import { IUpdateProductDTO } from "../../../dto/product/IUpdateProductDTO";
import { IProductRepository } from "../../../repository/IProductRepository";

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ){}

  async execute({amount,description,id,name,value}: IUpdateProductDTO): Promise<Product> {
    if (!amount || !description || !name || !value || !id) {
      throw new AppError("Amount/Description/Name/Value/Product not informed");
    }

    const data = await this.productRepository.update({amount,description,id,name,value});

    return data;
  }
}

export { UpdateProductUseCase }
