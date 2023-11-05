import { Router } from "express";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { sessionRoutes } from "./accounts/session.routes";
import { indexProduct } from "./product/index.routes";
import { indexUserRoutes } from "./user/index.routes";
import { indexLevelRoutes } from "./level/index.routes";

const routes = Router();

routes.use("/product", ensureAuthenticate, indexProduct);
routes.use("/users", ensureAuthenticate, indexUserRoutes);
routes.use("/level", indexLevelRoutes);
routes.use(sessionRoutes);

export { routes };
