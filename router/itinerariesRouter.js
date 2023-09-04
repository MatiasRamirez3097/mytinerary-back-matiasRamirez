import { Router } from "express";
import itinerariesController from "../controllers/itinerariesController.js";
const { createOne, deleteOne, getAll, getOne, updateOne } = itinerariesController

const itinerariesRouter = Router();

itinerariesRouter.get('/', getAll)
itinerariesRouter.post('/create', createOne)
itinerariesRouter.get('/getone/:id', getOne)
itinerariesRouter.put('/update/:id', updateOne)
itinerariesRouter.delete('/delete/:id', deleteOne)

export default itinerariesRouter;