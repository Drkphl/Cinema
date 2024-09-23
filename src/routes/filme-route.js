import { Router } from 'express';
import {
    destroy,
    index,
    store,
    update,
    show,
} from '/home/usuario082/Documentos/MongoDB/Cinema/src/controllers/filme-controller.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
