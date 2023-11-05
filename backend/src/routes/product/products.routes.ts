import { Router } from "express";
import { isAdm } from "../../middleware/isAdm";

import { CreateProductController } from "../../modules/product/useCase/product/create/createProductController";
import { ListProductController } from "../../modules/product/useCase/product/list/listProductController";
import { ListIdProductController } from "../../modules/product/useCase/product/listId/listIdProductController";
import { ListNameProductController } from "../../modules/product/useCase/product/listName/listNameProductController";
import { UpdateProductController } from "../../modules/product/useCase/product/update/updateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const listIdProductController = new ListIdProductController();
const listNameProductController = new ListNameProductController();
const updateProductController = new UpdateProductController();

productRoutes.post("/", isAdm, createProductController.handle);

productRoutes.get("/", listProductController.handle);

productRoutes.get("/id/:id", listIdProductController.handle);

productRoutes.get("/name/:name", listNameProductController.handle);

productRoutes.put("/update", isAdm, updateProductController.handle);

export { productRoutes };
