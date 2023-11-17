import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ProductController } from "../modules/product";

const productRoutes = Router();

const productController = new ProductController();

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
	productController.createProduct
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
	productController.getName
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
	productController.getId
);

productRoutes.get("/", productController.getAll);

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
	productController.updateProduct
);

export { productRoutes };
