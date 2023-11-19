import { Router } from "express";
import { UserController } from "../modules/user";
import { Joi, Segments, celebrate } from "celebrate";

const sessionRoutes = Router();

const userController = new UserController();

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
	userController.authenticateUser
);

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
	userController.createUser
);

export { sessionRoutes };
