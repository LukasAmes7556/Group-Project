import { Router } from "express";
import { GetList,Get,Add,Edit,Delete } from "../../controllers/api/survey-api.controller.server.js";
import { AuthGuard } from "../../utils/index.js";



const router = Router();

router.get('/list',AuthGuard, GetList);
router.get('/:id', Get);
router.post('/add', Add);
router.put('/edit/:id', Edit);
router.delete('/delete/:id', Delete);

export default router;