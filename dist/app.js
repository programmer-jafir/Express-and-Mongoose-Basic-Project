"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/product/product.route");
const order_router_1 = require("./modules/order/order.router");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use('/api/products', product_route_1.ProductRouters);
app.use('/api/orders', order_router_1.OrderRouters);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((req, res, next) => {
    const error = new Error('Route not found');
    res.status(404).json({ success: false, message: error.message });
    next();
});
exports.default = app;
