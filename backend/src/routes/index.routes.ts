import { Router } from "express";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";
import { levelRoutes } from "./level.routes";
import { groupLevelRoutes } from "./groupLevel.routes";
import { productRoutes } from "./products.routes";
import { cartRoutes } from "./cart.routes";

const routes = Router();

routes.use("/product", productRoutes);
routes.use("/cart", cartRoutes);
routes.use("/users", userRoutes);
routes.use("/level", levelRoutes);
routes.use("/group-level", groupLevelRoutes);
routes.use(sessionRoutes);

export { routes };
