import { Router } from "express";
import { GetList,Add,Edit,Delete } from "../../controllers/api/question-api.controller.server.js";

const router = Router();

router.get('/list', GetList);
router.post('/add', Add);
router.put('/edit/:id', Edit);
router.delete('/delete/:id', Delete);

export default router;