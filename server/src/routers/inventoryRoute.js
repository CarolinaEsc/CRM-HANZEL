import { Router } from 'express';
import { alertInventory, createInventory, getAllInventory, getInventory, updateInventory } from '../controllers/inventoryController';

const inventoryRouter = Router();

inventoryRouter.get('/inventorys', getAllInventory);
inventoryRouter.get('/alertinventory', alertInventory)
inventoryRouter.get('/inventory/:id', getInventory);
inventoryRouter.post('/inventory', createInventory);
inventoryRouter.put('/inventory/:id', updateInventory);

export default inventoryRouter;