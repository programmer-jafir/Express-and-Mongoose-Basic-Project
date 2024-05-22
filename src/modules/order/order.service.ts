import { Order } from "./order.model";
import { TOrder } from "./order.interface";



const createOrder = async (payLoad: TOrder) =>{
const result = await Order.create(payLoad)
    return result;
}
const getAllOrders = async (email?: string) =>{
const query = email ? { email } : {};
const result = await Order.find(query)
    return result;
}

export const OrderServices = {
    createOrder,
    getAllOrders
}