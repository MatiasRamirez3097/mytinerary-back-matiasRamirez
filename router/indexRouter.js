import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
import hashtagRouter from "./hashtagsRouter.js";
import usersRouter from "./usersRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";
import authRouter from "./authRouter.js";

const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
    res.send('its fine')
})

indexRouter.use('/auth', authRouter)
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/hashtags', hashtagRouter)
indexRouter.use('/users', usersRouter)
indexRouter.use('/itineraries', itinerariesRouter)

export default indexRouter;