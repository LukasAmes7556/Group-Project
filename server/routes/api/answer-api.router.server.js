import { Router } from "express";
import { GetList,Add,Delete } from "../../controllers/api/answer-api.controller.server.js";
import { AuthGuard } from "../../utils/index.js";

const router = Router();

router.get('/list',AuthGuard, GetList);
router.post('/add',AuthGuard, Add);
router.delete('/delete/:id',AuthGuard, Delete);

export default router;