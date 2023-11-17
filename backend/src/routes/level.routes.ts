import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { LevelController } from "../modules/level";

const levelRoutes = Router();

const levelController = new LevelController();

levelRoutes.use(ensureAuthenticate);
levelRoutes.use(isAdm);

levelRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				name: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	levelController.createLevel
);

levelRoutes.get("/", levelController.getAll);

levelRoutes.put(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				id: Joi.string().required(),
				name: Joi.string(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	levelController.update
);

export { levelRoutes };
