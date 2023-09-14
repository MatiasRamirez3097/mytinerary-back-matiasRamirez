import mongoose from 'mongoose'
import 'dotenv/config.js'

mongoose.connect(process.env.database_url)
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => {
        console.log("Connection failed")
    })