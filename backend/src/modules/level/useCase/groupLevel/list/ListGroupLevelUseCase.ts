import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../../repositorie/IGroupLevelRepository";
import { GroupLevel } from "@prisma/client";

@injectable()
class ListGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepository")
		private groupLevelRepository: IGroupLevelRepository
	) {}

	async execute(): Promise<GroupLevel[]> {
		return await this.groupLevelRepository.list();
	}
}

export { ListGroupLevelUseCase };
