import { Router } from "express";
import { GetList,Add,Edit,Delete } from "../../controllers/api/question-api.controller.server.js";
import { AuthGuard } from "../../utils/index.js";

const router = Router();

router.get('/list',AuthGuard, GetList);
router.post('/add',AuthGuard, Add);
router.put('/edit/:id',AuthGuard, Edit);
router.delete('/delete/:id',AuthGuard, Delete);

export default router;