import { inject, injectable } from "tsyringe";
import { ILevelRepository } from "../../repositorie/ILevelRepository";
import { IUpdateLevelDTO } from "../../dto/IUpdateLevelDTO";
import { Level } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdatelevelUseCase {
	constructor(
		@inject("LevelRepository")
		private levelRepository: ILevelRepository
	) {}

	async execute({ id, name }: IUpdateLevelDTO): Promise<Level> {
		const checkExistLevel = await this.levelRepository.listId({ id });
		if (!checkExistLevel) {
			throw new AppError("Level not exist");
		}

		return await this.levelRepository.update({ id, name });
	}
}

export { UpdatelevelUseCase };
