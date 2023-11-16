import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { isAdm } from "../middleware/isAdm";
import { CreateCartController } from "../modules/cart/useCase/create/createCartController";
import { ListCartController } from "../modules/cart/useCase/list/listCartController";
import { ListIdCartController } from "../modules/cart/useCase/listId/listIdCartController";
import { ListMyCartController } from "../modules/cart/useCase/listMy/ListMyCartController";
import { ListUserIdCartController } from "../modules/cart/useCase/listUserId/listUserIdCartController";

const cartRoutes = Router();

const createCartController = new CreateCartController();
const listCartController = new ListCartController();
const listIdCartController = new ListIdCartController();
const listMyCartController = new ListMyCartController();
const listUserIdController = new ListUserIdCartController();

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
	createCartController.handle
);

cartRoutes.get("/my", listMyCartController.handle);

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
	listUserIdController.handle
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
	listIdCartController.handle
);

cartRoutes.get("/", isAdm, listCartController.handle);

export { cartRoutes };
