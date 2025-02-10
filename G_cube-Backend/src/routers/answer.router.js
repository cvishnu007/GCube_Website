import {registerAnswer} from '../controllers/answer.controller.js';
import {router} from 'express';
const router = Router()

router.route('/register').post(registerAnswer)

export default router;

//this is router page for answers
