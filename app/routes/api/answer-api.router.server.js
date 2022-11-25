import { Router } from "express";
import { GetList,Add,Delete } from "../../controllers/api/answer-api.controller.server.js";

const router = Router();

router.get('/api/list', GetList);
router.post('/api/add', Add);
router.delete('/api/delete/:id', Delete);

export default router;