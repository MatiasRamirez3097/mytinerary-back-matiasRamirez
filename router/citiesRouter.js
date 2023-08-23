import { Router } from "express";
import citiesController from "../controllers/citiesController.js"
const { createOneCity, deleteOneCity, getAllCities, getOneCity, updateOneCity } = citiesController

const citiesRouter = Router();

citiesRouter.get(['/', '/:search'], getAllCities)

citiesRouter.post('/create', createOneCity)
citiesRouter.get('/getcity/:id', getOneCity)
citiesRouter.put('/update/:id', updateOneCity)
citiesRouter.delete('/delete/:id', deleteOneCity)

export default citiesRouter;