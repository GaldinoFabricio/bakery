import { inject, injectable } from "tsyringe";
import AppError from "../../../../../shared/errors/AppErrors";
import { ICreateCartDTO } from "../../../dto/cart/ICreateCartDTO";
import { ICartRepository } from "../../../repository/ICartRepository";

@injectable()
class CreateCartUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ){}

  async execute({amount,product_id,subTotal,user_id}: ICreateCartDTO): Promise<void> {
    if (!amount || !product_id || !subTotal || !user_id) {
      throw new AppError("Amount/Product/SubTotal/User not informed", 400);
    }

    await this.cartRepository.create({amount,product_id,subTotal,user_id});
  }
}

export { CreateCartUseCase }
