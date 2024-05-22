import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProduct);
router.get("/:productId", ProductControllers.getProductById);
router.put("/:productId", ProductControllers.updatedProductById);
router.delete("/:productId", ProductControllers.deleteProductById);

export const ProductRouters = router;