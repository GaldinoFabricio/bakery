import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { CreateProductController } from "../modules/product/useCase/product/create/createProductController";
import { ListProductController } from "../modules/product/useCase/product/list/listProductController";
import { ListIdProductController } from "../modules/product/useCase/product/listId/listIdProductController";
import { ListNameProductController } from "../modules/product/useCase/product/listName/listNameProductController";
import { UpdateProductController } from "../modules/product/useCase/product/update/updateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const listIdProductController = new ListIdProductController();
const listNameProductController = new ListNameProductController();
const updateProductController = new UpdateProductController();

productRoutes.post(
	"/",
	ensureAuthenticate,
	isAdm,
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				name: Joi.string().required(),
				description: Joi.string().required(),
				value: Joi.number().required(),
				amount: Joi.number().integer().min(0).required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	createProductController.handle
);

productRoutes.get(
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
	listNameProductController.handle
);

productRoutes.get(
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
	listIdProductController.handle
);

productRoutes.get("/", listProductController.handle);

productRoutes.put(
	"/update",
	ensureAuthenticate,
	isAdm,
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				id: Joi.string().required(),
				name: Joi.string(),
				description: Joi.string(),
				value: Joi.number(),
				amount: Joi.number().integer().min(0),
			}),
		},
		{
			abortEarly: false,
		}
	),
	updateProductController.handle
);

export { productRoutes };
