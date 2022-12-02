import { Router } from "express";
import { GetList,Add,Delete } from "../../controllers/api/answer-api.controller.server.js";
import { AuthGuard } from "../../utils/index.js";

const router = Router();

router.get('/list', GetList);
router.post('/add', Add);
router.delete('/delete/:id', Delete);

export default router;