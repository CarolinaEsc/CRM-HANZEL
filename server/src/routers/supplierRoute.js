import { Router } from 'express';
import { createSupplier, getAllSupplier, getSupplier, updateSupplier } from '../controllers/supplierController';

const supplieRouter = Router();

supplieRouter.get('/suppliers', getAllSupplier);
supplieRouter.get('/supplier/:id', getSupplier);
supplieRouter.post('/supplier', createSupplier);
supplieRouter.put('/supplier/:id', updateSupplier);

export default supplieRouter;