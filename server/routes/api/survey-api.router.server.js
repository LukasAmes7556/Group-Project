import { Router } from "express";
import { GetList,Get,Add,Edit,Delete } from "../../controllers/api/survey-api.controller.server.js";
import { AuthGuard } from "../../utils/index.js";



const router = Router();

router.get('/list',AuthGuard, GetList);
router.get('/:id',AuthGuard, Get);
router.post('/add',AuthGuard, Add);
router.put('/edit/:id',AuthGuard, Edit);
router.delete('/delete/:id',AuthGuard, Delete);

export default router;