import { Request, Response } from "express"
import { ProductServices } from "./product.service"
import { productValidationSchema } from "./product.validation";

const createProduct = async(req: Request, res: Response) =>{
    try{
        const ProductData = req.body;
        const {error} = productValidationSchema.validate(ProductData)

        const result = await ProductServices.createProduct(ProductData)
        if(error){
            res.status(500).json({
                success: false,
                message:"Product is not created successfully!",
                error: error.details,
            });
        }else{
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: result,
        
            });
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message:"Product is not created successfully!",
            error: err,
        });
};
};

const getAllProduct = async(req: Request, res: Response) =>{
    try{
        const searchTerm: string = req.query.searchTerm?.toString() || '';
        const result = await ProductServices.getAllProduct(searchTerm)

        let message = `Products fetched successfully!`;
        if (searchTerm) {
            message = `Products matching search term '${searchTerm}' fetched successfully!`;
        }

        res.status(200).json({
            success: true,
            message: message,
            data: result,
            
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Products is not fetched successfully!",
            error: err,
        });
}
}

const getProductById = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const result = await ProductServices.getProductById(productId);
    res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,

    });
    }catch(err){
        res.status(500).json({
            success: false,
            message:"Products is not fetched successfully!",
            error: err,
        });
}
};

const updatedProductById = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const { name, description, category, tags } = req.body;
        const result = await ProductServices.updatedProductById(productId, name, description,category, tags
            
        );
    res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,

    });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Product is not updated successfully!",
            error: err,
        });
}
};



const deleteProductById = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const result = await ProductServices.deleteProductById(productId);
    res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: result,

    });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err || "Product is not deleted successfully!",
            error: err,
        });
}
}
export const ProductControllers ={
    createProduct,
    getAllProduct,
    getProductById,
    deleteProductById,
    updatedProductById,
}