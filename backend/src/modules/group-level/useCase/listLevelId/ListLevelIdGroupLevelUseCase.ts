import { inject, injectable } from "tsyringe";
import { IGroupLevelRepository } from "../../repositorie/IGroupLevelRepository";
import { GroupLevel } from "@prisma/client";
import { IListLevelIdGroupLevelDTO } from "../../dto/IListLevelIdGroupLevelDTO";

@injectable()
class ListLevelIdGroupLevelUseCase {
	constructor(
		@inject("GroupLevelRepository")
		private groupLevelRepository: IGroupLevelRepository
	) {}

	async execute({
		level_id,
	}: IListLevelIdGroupLevelDTO): Promise<GroupLevel[]> {
		return await this.groupLevelRepository.listLevelId({ level_id });
	}
}

export { ListLevelIdGroupLevelUseCase };
