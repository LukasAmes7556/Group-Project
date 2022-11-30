import { Router } from "express";
import { GetList,Get,Add,Edit,Delete } from "../../controllers/api/survey-api.controller.server.js";

const router = Router();

router.get('/api/list', GetList);
router.get('/api/:id', Get);
router.post('/api/add', Add);
router.put('/api/edit/:id', Edit);
router.delete('/api/delete/:id', Delete);

export default router;