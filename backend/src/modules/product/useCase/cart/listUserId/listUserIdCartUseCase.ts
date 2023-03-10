import { Cart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../../shared/errors/AppErrors";
import { IListUserIdCartDTO } from "../../../dto/cart/IListUserIdCartDTO";
import { ICartRepository } from "../../../repository/ICartRepository";

@injectable()
class ListUserIdCartUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ){}

  async execute({user_id}: IListUserIdCartDTO): Promise<Cart[]> {
    if (!user_id) {
      throw new AppError("User not informed", 400);
    }

    const data = await this.cartRepository.listUserId({user_id});

    return data;
  }
}

export { ListUserIdCartUseCase }
