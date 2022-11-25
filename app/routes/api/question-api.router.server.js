import { Router } from "express";
import { GetList,Add,Edit,Delete } from "../../controllers/api/question-api.controller.server.js";

const router = Router();

router.get('/api/list', GetList);
router.post('/api/add', Add);
router.put('/api/edit/:id', Edit);
router.delete('/api/delete/:id', Delete);

export default router;