import { model, Schema } from "mongoose"

const userSchema = Schema({
    birth_date: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    surname:
    {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    photo: {
        default: 'https://www.computerhope.com/jargon/g/guest-user.png',
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const User = model('users', userSchema)

export default User;