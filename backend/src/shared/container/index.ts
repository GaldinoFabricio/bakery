import { container } from "tsyringe";

import { OfficeRepsitory } from "../../modules/office/repository/implemantion/OfficeRepository";
import { IOfficeRepository } from "../../modules/office/repository/IOfficeRepository";
import { PermissionUserRepository } from "../../modules/permission/repository/implemantation/PermissionUserRepository";
import { IPermissionUserRepository } from "../../modules/permission/repository/IPermissionUserRepository";
import { ICartRepository } from "../../modules/product/repository/ICartRepository";
import { CartRepository } from "../../modules/product/repository/implemantion/CartRepository";
import { ProductRepository } from "../../modules/product/repository/implemantion/ProductRepository";
import { IProductRepository } from "../../modules/product/repository/IProductRepository";
import { UserRepository } from "../../modules/user/repository/implemantion/UserRepository";
import { IUserRepository } from "../../modules/user/repository/IUserRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository,
);

container.registerSingleton<ICartRepository>(
  "CartRepository",
  CartRepository,
);

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository,
);

container.registerSingleton<IOfficeRepository>(
  "OfficeRepository",
  OfficeRepsitory,
);

container.registerSingleton<IPermissionUserRepository>(
  "PermissionUserRepository",
  PermissionUserRepository,
);
