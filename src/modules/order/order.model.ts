import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/ 
      },
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product' 
      },
      price: {
        type: Number,
        required: true,
        min: 0 
      },
      quantity: {
        type: Number,
        required: true,
        min: 1 
      }
})

export const Order = model<TOrder>('Order', orderSchema);