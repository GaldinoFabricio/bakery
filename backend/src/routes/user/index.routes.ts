import { Router } from "express";

import { isAdm } from "../../middleware/isAdm";
import { userRoutes } from "./user.routes";

const indexUserRoutes = Router();

// indexUserRoutes.use(isAdm);

indexUserRoutes.use(userRoutes);

export { indexUserRoutes }