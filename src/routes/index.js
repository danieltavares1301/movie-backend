import { Router } from 'express';

import Controller from '../controllers/Controller';

const router = Router();
const controller = new Controller();

router.get('/movie', controller.index);
router.post('/movie', controller.store);
router.get('/movie/:id', controller.getOne);
router.delete('/movie/:id', controller.remove);
router.put('/movie/:id', controller.update);

export default router;
