import { Router } from 'express'
import getCheck from '../controllers/getCheck.ctl.js';

const router = Router();

// router.get('',(req, res ,next)=>{
//     console.log('->/getCheckCtl');
//     next();
// } ,getCheck);

router.get('', getCheck);

export default router;