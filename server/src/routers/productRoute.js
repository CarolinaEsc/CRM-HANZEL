import { Router } from 'express';
import { getTopProduct } from '../controllers/productController';

const productRouter = Router();

productRouter.get('/topproducts', getTopProduct);

export default productRouter;