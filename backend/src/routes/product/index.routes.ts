import { Router } from "express";
import { cartRoutes } from "./cart.routes";
import { productRoutes } from "./products.routes";

const indexProduct = Router();

indexProduct.use("/cart", cartRoutes);
indexProduct.use(productRoutes);

export { indexProduct };
