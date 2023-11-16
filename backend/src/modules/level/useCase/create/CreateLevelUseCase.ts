import { inject, injectable } from "tsyringe";
import { ILevelRepository } from "../../repositorie/ILevelRepository";
import { ICreateLevelDTO } from "../../dto/ICreateLevelDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class CreateLevelUseCase {
	constructor(
		@inject("LevelRepository")
		private levelRepository: ILevelRepository
	) {}

	async execute({ name }: ICreateLevelDTO): Promise<void> {
		const checkExistNameLevel = await this.levelRepository.listName({ name });
		if (!checkExistNameLevel) {
			throw new AppError("Level alreadys registred");
		}

		await this.levelRepository.create({ name });
	}
}

export { CreateLevelUseCase };
