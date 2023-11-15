import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ListUserController } from "../modules/user/useCase/user/list/listUserController";
import { ListEmailUserController } from "../modules/user/useCase/user/listEmail/listEmailUserController";
import { ListIdUserController } from "../modules/user/useCase/user/listId/listIdUserController";
import { ListNameUserController } from "../modules/user/useCase/user/listName/listNameUserController";
import { UpdateUserController } from "../modules/user/useCase/user/update/updateUserController";
import { ListMyUserController } from "../modules/user/useCase/user/listMy/ListMyUserController";
import { CreateUserController } from "../modules/user/useCase/user/create/createUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listEmailUserController = new ListEmailUserController();
const listIdUserController = new ListIdUserController();
const listMyUserController = new ListMyUserController();
const listNameUserController = new ListNameUserController();
const updateUserController = new UpdateUserController();

userRoutes.use(ensureAuthenticate);

userRoutes.post(
	"/",
	isAdm,
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string()
					.pattern(new RegExp("^(?=.*[!@#$%^&*])"))
					.min(8)
					.required(),
				is_adm: Joi.boolean(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	createUserController.handle
);

userRoutes.get("/my", listMyUserController.handle);

userRoutes.get(
	"/email",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				email: Joi.string().email().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	listEmailUserController.handle
);

userRoutes.get(
	"/name/:name",
	celebrate(
		{
			[Segments.PARAMS]: Joi.object({
				name: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	listNameUserController.handle
);

userRoutes.get(
	"/id/:id",
	celebrate(
		{
			[Segments.PARAMS]: Joi.object({
				id: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	listIdUserController.handle
);

userRoutes.get("/", isAdm, listUserController.handle);

userRoutes.put(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				id: Joi.number().required(),
				name: Joi.string(),
				email: Joi.string().email(),
				password: Joi.string()
					.pattern(new RegExp("^(?=.*[!@#$%^&*])"))
					.min(8),
				is_adm: Joi.boolean(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	updateUserController.handle
);

export { userRoutes };
