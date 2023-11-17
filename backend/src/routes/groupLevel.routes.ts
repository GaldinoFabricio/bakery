import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { GroupLevelController } from "../modules/groupLevel";

const groupLevelRoutes = Router();

const groupLevelController = new GroupLevelController();

groupLevelRoutes.use(ensureAuthenticate);

groupLevelRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				level_id: Joi.string().required(),
				user_id: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	groupLevelController.createGroupLeveL
);

groupLevelRoutes.get(
	"level/:level_id",
	celebrate(
		{
			[Segments.PARAMS]: Joi.object({
				level_id: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	groupLevelController.getLevelId
);

groupLevelRoutes.get(
	"/user/:user_id",
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
	groupLevelController.getUserId
);

groupLevelRoutes.get("/", isAdm, groupLevelController.getAllGroupLevel);

groupLevelRoutes.put(
	"/level",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				id: Joi.string().required(),
				level_id: Joi.string().required(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	groupLevelController.updateLevel
);

groupLevelRoutes.put(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object({
				id: Joi.string().required(),
				level_id: Joi.string(),
				user_id: Joi.string(),
			}),
		},
		{
			abortEarly: false,
		}
	),
	groupLevelController.updateGroupLevel
);

export { groupLevelRoutes };
