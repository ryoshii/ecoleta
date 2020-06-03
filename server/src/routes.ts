import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsCotroller = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsCotroller.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;
