import { Router } from "express";
import { CreateLevelController } from "../../modules/level/useCase/level/create/CreateLevelController";
import { ListLevelController } from "../../modules/level/useCase/level/List/ListLevelController";
import { UpdateLevelController } from "../../modules/level/useCase/level/update/UpdateLevelController";
import { ensureAuthenticate } from "../../middleware/ensureAuthenticate";

const levelRoutes = Router();

const createLevelController = new CreateLevelController();
const listLevelController = new ListLevelController();
const updateLevelController = new UpdateLevelController();

levelRoutes.use(ensureAuthenticate);

levelRoutes.post("/", createLevelController.handle);

levelRoutes.get("/", listLevelController.handle);

levelRoutes.put("/", updateLevelController.handle);

export { levelRoutes };
