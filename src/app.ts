import express, { NextFunction, Request, Response } from 'express';
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

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Route not found');
  res.status(404).json({ success: false, message: error.message });
});
export default app