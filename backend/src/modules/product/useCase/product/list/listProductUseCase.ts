import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../../repository/IProductRepository";

@injectable()
class ListProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ){}
  
  async execute(): Promise<Product[]> {
    const data = await this.productRepository.list();
    
    return data;
  }
}

export { ListProductUseCase }
