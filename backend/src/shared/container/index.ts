import { container } from "tsyringe";

import { ProductRepository } from "../../modules/product/repository/implemantion/ProductRepository";
import { IProductRepository } from "../../modules/product/repository/IProductRepository";
import { UserRepository } from "../../modules/user/repository/implemantion/UserRepository";
import { IUserRepository } from "../../modules/user/repository/IUserRepository";
import { ILevelRepository } from "../../modules/level/repositorie/ILevelRepository";
import { LevelRepository } from "../../modules/level/repositorie/implemantions/LevelRepository";
import { IGroupLevelRepository } from "../../modules/group-level/repositorie/IGroupLevelRepository";
import { GroupLevelRepository } from "../../modules/group-level/repositorie/implemantions/GroupLevelRepository";
import { ICartRepository } from "../../modules/cart/repositorie/ICartRepository";
import { CartRepository } from "../../modules/cart/repositorie/implemantions/CartRepository";

container.registerSingleton<IProductRepository>(
	"ProductRepository",
	ProductRepository
);

container.registerSingleton<ICartRepository>("CartRepository", CartRepository);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ILevelRepository>(
	"LevelRepository",
	LevelRepository
);

container.registerSingleton<IGroupLevelRepository>(
	"GroupLevelRepository",
	GroupLevelRepository
);
