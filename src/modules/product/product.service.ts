import { TProduct } from "./product.interface"
import { Product } from "./product.model";

const createProduct = async (payLoad: TProduct) =>{
const result = await Product.create(payLoad)
    return result;
}
export const ProductServices ={
    createProduct
}