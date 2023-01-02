import { Cart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../../../repository/ICartRepository";

@injectable()
class ListCartUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ){}

  async execute(): Promise<Cart[]> {
    const data = await this.cartRepository.list();

    return data;
  }
}

export { ListCartUseCase }
