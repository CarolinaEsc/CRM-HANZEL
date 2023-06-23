import express from "express";
import config from './config';
import ingedientRouter from "./routers/ingredientRoute";
import supplieRouter from "./routers/supplierRoute";
import inventoryRouter from "./routers/inventoryRoute";
import productRouter from "./routers/productRoute";

const app = express();

//Setting
app.set('port', config.port);
//Middelwars
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(ingedientRouter);
app.use(supplieRouter);
app.use(inventoryRouter);
app.use(productRouter);

export default app;