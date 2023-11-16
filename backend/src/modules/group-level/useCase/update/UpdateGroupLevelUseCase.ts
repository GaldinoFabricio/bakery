import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../repositorie/IGroupLevelRepository";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateGroupLevelDTO } from "../../dto/IUpdateGroupLevelDTO";
import { UserRepository } from "../../../user/repository/implemantion/UserRepository";
import { LevelRepository } from "../../../level/repositorie/implemantions/LevelRepository";

@injectable()
class UpdateGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepositoy")
		private groupLevelRepository: IGroupLevelRepository,
		@inject("LevelRepository")
		private levelRepository: LevelRepository,
		@inject("UserRepository")
		private userRepository: UserRepository
	) {}

	async execute({
		id,
		level_id,
		user_id,
	}: IUpdateGroupLevelDTO): Promise<void> {
		if (user_id) {
			const checkExistUser = await this.userRepository.listId({
				id: user_id,
			});
			if (!checkExistUser) {
				throw new AppError("User not exist");
			}
		}

		if (level_id) {
			const checkExistLevel = await this.levelRepository.listId({
				id: level_id,
			});
			if (!checkExistLevel) {
				throw new AppError("Level not exist");
			}
		}

		if (level_id && user_id) {
			const checkExistLevelUser =
				await this.groupLevelRepository.listUserLevel({
					level_id,
					user_id,
				});
			if (checkExistLevelUser) {
				throw new AppError("User level already exist");
			}
		}

		await this.groupLevelRepository.update({ id, level_id, user_id });
	}
}

export { UpdateGroupLevelUseCase };
