import { Router } from "express";
import { groupLevelRoutes } from "./groupLevel.routes";
import { levelRoutes } from "./level.routes";

const indexLevelRoutes = Router();

indexLevelRoutes.use("/group-level", groupLevelRoutes);
indexLevelRoutes.use(levelRoutes);

export { indexLevelRoutes };
