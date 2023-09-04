import { Router } from "express";
import hashtagController from "../controllers/hashtagsController.js";
const { createOne, deleteOne, getAll, getOne, updateOne } = hashtagController

const hashtagRouter = Router();

hashtagRouter.get(['/', '/:search'], getAll)

hashtagRouter.post('/create', createOne)
//hashtagRouter.get('/getone/:id', getOne)
//hashtagRouter.put('/update/:id', updateOne)
//hashtagRouter.delete('/delete/:id', deleteOne)

export default hashtagRouter;