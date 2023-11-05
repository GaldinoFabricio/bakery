import { Router } from "express";

import { isAdm } from "../../middleware/isAdm";
import { CreateUserController } from "../../modules/user/useCase/user/create/createUserController";
import { ListUserController } from "../../modules/user/useCase/user/list/listUserController";
import { ListEmailUserController } from "../../modules/user/useCase/user/listEmail/listEmailUserController";
import { ListIdUserController } from "../../modules/user/useCase/user/listId/listIdUserController";
import { ListNameUserController } from "../../modules/user/useCase/user/listName/listNameUserController";
import { UpdateUserController } from "../../modules/user/useCase/user/update/updateUserController";
import { ListMyUserController } from "../../modules/user/useCase/user/listMy/ListMyUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listEmailUserController = new ListEmailUserController();
const listIdUserController = new ListIdUserController();
const listMyUserController = new ListMyUserController();
const listNameUserController = new ListNameUserController();
const updateUserController = new UpdateUserController();

userRoutes.post("/", createUserController.handle);

userRoutes.get("/my", listMyUserController.handle);

userRoutes.get("/email", listEmailUserController.handle);

userRoutes.get("/name/:name", listNameUserController.handle);

userRoutes.get("/id/:id", listIdUserController.handle);

userRoutes.get("/", isAdm, listUserController.handle);

userRoutes.put("/", updateUserController.handle);

export { userRoutes };
