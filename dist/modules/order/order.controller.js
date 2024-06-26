"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const product_model_1 = require("../product/product.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.body;
        const existingProduct = yield product_model_1.Product.findById(productId);
        if (!existingProduct) {
            return res.status(400).json({ success: false, message: 'Invalid productId' });
        }
        else {
            const OrdertData = req.body;
            const { error } = order_validation_1.default.validate(OrdertData);
            const result = yield order_service_1.OrderServices.createOrder(OrdertData);
            if (error) {
                res.status(500).json({
                    success: false,
                    message: "Order is not created successfully!",
                    error: error.details,
                });
            }
            else {
                res.json({
                    success: true,
                    message: "Order created successfully!",
                    data: result,
                });
            }
        }
    }
    catch (err) {
        res.json({
            success: false,
            message: "Order is not created successfully!",
            error: err,
        });
    }
    ;
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.OrderServices.getAllOrders(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
    ;
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
};
