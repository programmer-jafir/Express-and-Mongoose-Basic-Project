import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async(req: Request, res: Response) =>{
    try{
        const OrdertData = req.body;
        const {error} = orderValidationSchema.validate(OrdertData)
    const result = await OrderServices.createOrder(OrdertData)
    if(error){
        res.status(500).json({
            success: false,
            message:"Order is not created successfully!",
            error: error.details,
        });
    }else{
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
    
        });
    }
    }catch(err){
        res.json({
            success: false,
            message: "Order is not created successfully!",
            error: err,
        });
};
};

const getAllOrders = async(req: Request, res: Response) =>{
    try{
    const email = req.query.email as string | undefined;
    const result = await OrderServices.getAllOrders(email)
    res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,

    });
    }catch(err){
        res.status(500).json({
            success: false,
            message:"Order not found",
            error: err,
        });
};
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
}