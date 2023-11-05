import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../../repositorie/IGroupLevelRepository";
import { ICreateGroupLevelDTO } from "../../../dto/groupLevel/ICreateGroupLevelDTO";
import AppError from "../../../../../shared/errors/AppErrors";

@injectable()
class CreateGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepositoy")
		private groupLevelRepository: IGroupLevelRepository
	) {}

	async execute({ level_id, user_id }: ICreateGroupLevelDTO): Promise<void> {
		const checkExistLevelUser = await this.groupLevelRepository.listUserLevel(
			{ level_id, user_id }
		);
		if (checkExistLevelUser) {
			throw new AppError("User level already exist");
		}

		await this.groupLevelRepository.create({ level_id, user_id });
	}
}

export { CreateGroupLevelUseCase };
