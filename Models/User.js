import { model, Schema } from "mongoose"

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surname:
    {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = model('users', userSchema)

export default User;