import { Router } from "express";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { sessionRoutes } from "./accounts/session.routes";
import { indexOfficeRoutes } from "./office/index.routes";
import { indexProduct } from "./product/index.routes";
import { indexUserRoutes } from "./user/index.routes";

const routes = Router();

routes.use("/session", sessionRoutes)
routes.use("/product",ensureAuthenticate,indexProduct);
routes.use("/users", ensureAuthenticate,indexUserRoutes);
routes.use(ensureAuthenticate, indexOfficeRoutes);

export { routes }