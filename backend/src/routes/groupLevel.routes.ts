import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { isAdm } from "../middleware/isAdm";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { CreateGroupLevelController } from "../modules/group-level/useCase/create/CreateGroupLevelController";
import { ListGroupLevelController } from "../modules/group-level/useCase/list/ListGroupLevelController";
import { ListLevelIdGroupLevelController } from "../modules/group-level/useCase/listLevelId/ListLevelIdGroupLevelController";
import { ListUserIdGroupLevelController } from "../modules/group-level/useCase/listUserId/ListUserIdGroupLevelController";
import { UpdateGroupLevelController } from "../modules/group-level/useCase/update/UpdateGroupLevelController";
import { UpdateLevelGroupLevelController } from "../modules/group-level/useCase/updateLevel/UpdateLevelGroupLevelController";

const groupLevelRoutes = Router();

const createGroupLevelController = new CreateGroupLevelController();
const listGroupLevelController = new ListGroupLevelController();
const listLevelIdGroupLevelController = new ListLevelIdGroupLevelController();
const listUserIdGroupLevelController = new ListUserIdGroupLevelController();
const updateGroupLevelController = new UpdateGroupLevelController();
const updateLevelGroupLevelController = new UpdateLevelGroupLevelController();

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
	createGroupLevelController.handle
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
	listLevelIdGroupLevelController.handle
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
	listUserIdGroupLevelController.handle
);

groupLevelRoutes.get("/", isAdm, listGroupLevelController.handle);

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
	updateLevelGroupLevelController.handle
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
	updateGroupLevelController.handle
);

export { groupLevelRoutes };
