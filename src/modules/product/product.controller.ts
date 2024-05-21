import { Request, Response } from "express"
import { ProductServices } from "./product.service"
import { error } from "console";

const createProduct = async(req: Request, res: Response) =>{
    try{
        const ProductData = req.body;
    const result = await ProductServices.createProduct(ProductData)
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,

    });
    }catch(err){
        res.json({
            success: false,
            message: "Product is not created successfully!",
            error: err,
        });
}
}
export const ProductControllers ={
    createProduct
}