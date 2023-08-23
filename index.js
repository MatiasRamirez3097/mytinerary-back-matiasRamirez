import 'dotenv/config.js'
import express from "express";
import indexRouter from './router/indexRouter.js'
import cors from 'cors'
import './config/database.js'

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.listen(process.env.port, () => {
    console.log('it works')
})

