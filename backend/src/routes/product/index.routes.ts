import { Router } from "express";
import { cartRoutes } from "./cart.routes";
import { productRoutes } from "./products.routes";

const indexProduct = Router();

indexProduct.use(productRoutes);
indexProduct.use(cartRoutes);

export { indexProduct };