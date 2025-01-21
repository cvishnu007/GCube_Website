import {registerQuery} from '../controllers/query.controller.js';
import {Router} from 'express';

const router=Router();

router.route('/register').post(registerQuery);

export default router;
