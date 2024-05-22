"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouters = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.ProductControllers.createProduct);
router.get("/", product_controller_1.ProductControllers.getAllProduct);
router.get("/:productId", product_controller_1.ProductControllers.getProductById);
router.put("/:productId", product_controller_1.ProductControllers.updatedProductById);
router.delete("/:productId", product_controller_1.ProductControllers.deleteProductById);
exports.ProductRouters = router;
