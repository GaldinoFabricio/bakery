import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";

import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { CreateLevelController } from "../modules/level/useCase/level/create/CreateLevelController";
import { ListLevelController } from "../modules/level/useCase/level/List/ListLevelController";
import { UpdateLevelController } from "../modules/level/useCase/level/update/UpdateLevelController";

const levelRoutes = Router();

const createLevelController = new CreateLevelController();
const listLevelController = new ListLevelController();
const updateLevelController = new UpdateLevelController();

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
	createLevelController.handle
);

levelRoutes.get("/", listLevelController.handle);

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
	updateLevelController.handle
);

export { levelRoutes };
