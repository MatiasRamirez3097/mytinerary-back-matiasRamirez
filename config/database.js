import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://mramire7:4arE91DyADKQ5a3a@cluster0.6xb4zkp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => {
        console.log("Connection failed")
    })