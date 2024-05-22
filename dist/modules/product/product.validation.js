"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryValidationSchema = exports.variantValidationSchema = exports.productValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Joi schema for TVariant
const variantValidationSchema = joi_1.default.object({
    type: joi_1.default.string().required(),
    value: joi_1.default.string().required()
});
exports.variantValidationSchema = variantValidationSchema;
// Joi schema for TInventory
const inventoryValidationSchema = joi_1.default.object({
    quantity: joi_1.default.number().integer().min(0).required(),
    inStock: joi_1.default.boolean().required()
});
exports.inventoryValidationSchema = inventoryValidationSchema;
// Joi schema for TProduct
const productValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().min(0).required(),
    category: joi_1.default.string().required(),
    tags: joi_1.default.array().items(joi_1.default.string().required()).required(),
    variants: joi_1.default.array().items(variantValidationSchema).required(),
    inventory: inventoryValidationSchema.required()
});
exports.productValidationSchema = productValidationSchema;
