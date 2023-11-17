import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../repositorie/IGroupLevelRepository";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateLevelGroupLevelDTO } from "../../dto/IUpdateLevelGroupLevelDTO";
import { LevelRepository } from "../../../level/repositorie/implemantions/LevelRepository";

@injectable()
class UpdateLevelGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepositoy")
		private groupLevelRepository: IGroupLevelRepository,
		@inject("LevelRepository")
		private levelRepository: LevelRepository
	) {}

	async execute({ id, level_id }: IUpdateLevelGroupLevelDTO): Promise<void> {
		const checkExistGroupLevel = await this.groupLevelRepository.listId({
			id,
		});
		if (!checkExistGroupLevel) {
			throw new AppError("not exist group leve");
		}

		const checkExistLevel = await this.levelRepository.listId({
			id: level_id,
		});
		if (!checkExistLevel) {
			throw new AppError("Level not exist");
		}

		await this.groupLevelRepository.updateLevel({ id, level_id });
	}
}

export { UpdateLevelGroupLevelUseCase };
