import { Router } from 'express';
import { createIngredient, getAllIngredient, getIngredient, getTopIngredients, updateIngredient } from '../controllers/ingredientController';

const ingedientRouter = Router();

ingedientRouter.get('/ingredients', getAllIngredient);
ingedientRouter.get('/ingredient/:id', getIngredient);
ingedientRouter.post('/ingredient', createIngredient);
ingedientRouter.put('/ingredient/:id', updateIngredient);

ingedientRouter.get('/topingredient', getTopIngredients);

export default ingedientRouter;