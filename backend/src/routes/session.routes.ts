import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { AuthenticateUserController } from "../modules/user/useCase/authenticate/authenticateUserController";
import { CreateUserController } from "../modules/user/useCase/create/createUserController";

const sessionRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

sessionRoutes.post(
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
	createUserController.handle
);

sessionRoutes.post(
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
	authenticateUserController.handle
);

export { sessionRoutes };
