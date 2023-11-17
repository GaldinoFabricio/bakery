import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { UserController } from "../modules/user";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				email: Joi.string().email().required(),
				password: Joi.string()
					.pattern(new RegExp("^(?=.*[!@#$%^&*])"))
					.min(8)
					.required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	userController.authenticateUser
);

userRoutes.post(
	"/create",
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
	userController.createUser
);

userRoutes.get("/my", userController.getMy);

userRoutes.get(
	"/name/:name",
	ensureAuthenticate,
	isAdm,
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
	userController.getName
);

userRoutes.get(
	"/id/:id",
	ensureAuthenticate,
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
	userController.getId
);

userRoutes.get("/", isAdm, userController.getAll);

userRoutes.put(
	"/",
	ensureAuthenticate,
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
	userController.update
);

export { userRoutes };
