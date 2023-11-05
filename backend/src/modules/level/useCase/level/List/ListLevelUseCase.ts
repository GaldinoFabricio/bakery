import { inject, injectable } from "tsyringe";
import { ILevelRepository } from "../../../repositorie/ILevelRepository";
import { Level } from "@prisma/client";

@injectable()
class ListLevelUseCase {
	constructor(
		@inject("LevelRepository")
		private levelRepository: ILevelRepository
	) {}

	async execute(): Promise<Level[]> {
		return await this.levelRepository.list();
	}
}

export { ListLevelUseCase };
