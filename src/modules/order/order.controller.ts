import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async(req: Request, res: Response) =>{
    try{
        const OrdertData = req.body;
    const result = await OrderServices.createOrder(OrdertData)
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,

    });
    }catch(err){
        res.json({
            success: false,
            message: err || "Order is not created successfully!",
            error: err,
        });
};
};

const getAllOrders = async(req: Request, res: Response) =>{
    try{
    const result = await OrderServices.getAllOrders()
    res.json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,

    });
    }catch(err){
        res.json({
            success: false,
            message: err || "Orders is not fetched successfully!",
            error: err,
        });
};
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
}