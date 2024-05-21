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
            message: err || "Product is not created successfully!",
            error: err,
        });
};
};

const getAllProduct = async(req: Request, res: Response) =>{
    try{
    const result = await ProductServices.getAllProduct()
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,

    });
    }catch(err){
        res.json({
            success: false,
            message: err || "Something went wrong!",
            error: err,
        });
}
}

const getProductById = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const result = await ProductServices.getProductById(productId);
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,

    });
    }catch(err){
        res.json({
            success: false,
            message: err || "Something went wrong!",
            error: err,
        });
}
}
export const ProductControllers ={
    createProduct,
    getAllProduct,
    getProductById
}