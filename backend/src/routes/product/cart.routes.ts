import { Router } from "express";
import { isAdm } from "../../middleware/isAdm";
import { permissionUser } from "../../middleware/permissionUser";

import { CreateCartController } from "../../modules/product/useCase/cart/create/createCartController";
import { ListCartController } from "../../modules/product/useCase/cart/list/listCartController";
import { ListIdCartController } from "../../modules/product/useCase/cart/listId/listIdCartController";
import { ListUserIdCartController } from "../../modules/product/useCase/cart/listUserId/listUserIdCartController";

const cartRoutes = Router();

const createCartController = new CreateCartController();
const listCartController = new ListCartController();
const listIdCartController = new ListIdCartController();
const listUserIdController = new ListUserIdCartController();

cartRoutes.post("/create", createCartController.handle);

cartRoutes.get(
  "/",
  isAdm,
  permissionUser,
  listCartController.handle
);

cartRoutes.get("/id/:id", listIdCartController.handle);

cartRoutes.get("/userId/:user_id", listUserIdController.handle);

export { cartRoutes }