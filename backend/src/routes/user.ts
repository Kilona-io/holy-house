import { Router } from 'express';
import { UserController } from '../controllers/index';

const route = Router();

route.post('/', UserController.createUser);

export default route;
