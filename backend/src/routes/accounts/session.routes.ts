import { Router } from "express";

import { AuthenticateUserController } from "../../modules/user/useCase/user/authenticate/authenticateUserController";

const sessionRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

sessionRoutes.post("/", authenticateUserController.handle);

export { sessionRoutes }
