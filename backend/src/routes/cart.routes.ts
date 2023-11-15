import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { isAdm } from "../middleware/isAdm";
import { CreateCartController } from "../modules/product/useCase/cart/create/createCartController";
import { ListCartController } from "../modules/product/useCase/cart/list/listCartController";
import { ListIdCartController } from "../modules/product/useCase/cart/listId/listIdCartController";
import { ListUserIdCartController } from "../modules/product/useCase/cart/listUserId/listUserIdCartController";
import { ListMyCartController } from "../modules/product/useCase/cart/listMy/ListMyCartController";

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
