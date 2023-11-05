import { Router } from "express";
import { CreateGroupLevelController } from "../../modules/level/useCase/groupLevel/create/CreateGroupLevelController";
import { ListGroupLevelController } from "../../modules/level/useCase/groupLevel/list/ListGroupLevelController";
import { ListLevelIdGroupLevelController } from "../../modules/level/useCase/groupLevel/listLevelId/ListLevelIdGroupLevelController";
import { ListUserIdGroupLevelController } from "../../modules/level/useCase/groupLevel/listUserId/ListUserIdGroupLevelController";
import { UpdateGroupLevelController } from "../../modules/level/useCase/groupLevel/update/UpdateGroupLevelController";
import { UpdateLevelGroupLevelController } from "../../modules/level/useCase/groupLevel/updateLevel/UpdateLevelGroupLevelController";
import { ensureAuthenticate } from "../../middleware/ensureAuthenticate";

const groupLevelRoutes = Router();

const createGroupLevelController = new CreateGroupLevelController();
const listGroupLevelController = new ListGroupLevelController();
const listLevelIdGroupLevelController = new ListLevelIdGroupLevelController();
const listUserIdGroupLevelController = new ListUserIdGroupLevelController();
const updateGroupLevelController = new UpdateGroupLevelController();
const updateLevelGroupLevelController = new UpdateLevelGroupLevelController();

groupLevelRoutes.use(ensureAuthenticate);

groupLevelRoutes.post("/", createGroupLevelController.handle);

groupLevelRoutes.get("level/:level_id", listLevelIdGroupLevelController.handle);

groupLevelRoutes.get("/user/:user_id", listUserIdGroupLevelController.handle);

groupLevelRoutes.get("/", listGroupLevelController.handle);

groupLevelRoutes.put("/level", updateLevelGroupLevelController.handle);

groupLevelRoutes.put("/", updateGroupLevelController.handle);

export { groupLevelRoutes };
