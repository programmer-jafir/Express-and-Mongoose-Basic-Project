import express, { Request, Response } from 'express';
import { ProductRouters } from './modules/product/product.route';
const app = express();

//parser
app.use(express.json())

app.use('/api/products', ProductRouters);

app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

export default app