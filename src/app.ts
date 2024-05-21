import express, { Request, Response } from 'express';
import { ProductRouters } from './modules/product/product.route';
import { OrderRouters } from './modules/order/order.router';
const app = express();

//parser
app.use(express.json())

app.use('/api/products', ProductRouters);
app.use('/api/orders', OrderRouters);

app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

export default app