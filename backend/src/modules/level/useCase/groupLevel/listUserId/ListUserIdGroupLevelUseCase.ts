import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../../repositorie/IGroupLevelRepository";
import { GroupLevel } from "@prisma/client";
import { IListUserIdGroupLevelDTO } from "../../../dto/groupLevel/IListUserIdGroupLevelDTO";

@injectable()
class ListUserIdGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepository")
		private groupLevelRepository: IGroupLevelRepository
	) {}

	async execute({
		user_id,
	}: IListUserIdGroupLevelDTO): Promise<GroupLevel | null> {
		return await this.groupLevelRepository.listUserId({ user_id });
	}
}

export { ListUserIdGroupLevelUseCase };
