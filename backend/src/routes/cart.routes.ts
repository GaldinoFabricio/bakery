import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { isAdm } from "../middleware/isAdm";
import { CartController } from "../modules/cart";

const cartRoutes = Router();

const cartController = new CartController();

cartRoutes.use(ensureAuthenticate);

cartRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				product_id: Joi.string().required(),
				user_id: Joi.string().required(),
				subTotal: Joi.number().required(),
				amount: Joi.number().integer().min(0).required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	cartController.createCart
);

cartRoutes.get("/my", cartController.getMy);

cartRoutes.get(
	"/user/:user_id",
	isAdm,
	celebrate(
		{
			[Segments.PARAMS]: Joi.object({
				user_id: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	cartController.getUserId
);

cartRoutes.get(
	"/id/:id",
	isAdm,
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
	cartController.getId
);

cartRoutes.get("/", isAdm, cartController.getAll);

export { cartRoutes };
