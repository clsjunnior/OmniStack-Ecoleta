import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

routes.post('/points', upload.single('image'), pointsController.create);
// nome do campo que vem do post = image

export default routes;
