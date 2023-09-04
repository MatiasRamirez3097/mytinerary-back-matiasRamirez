import { Router } from "express";
import usersController from "../controllers/usersController.js";
const { createOne, deleteOne, getAll, getOne, updateOne } = usersController

const usersRouter = Router();

usersRouter.get(['/', '/:search'], getAll)

usersRouter.post('/create', createOne)
//citiesRouter.get('/getcity/:id', getOneCity)
//citiesRouter.put('/update/:id', updateOneCity)
//citiesRouter.delete('/delete/:id', deleteOneCity)

export default usersRouter;