import { model, Schema } from "mongoose"

const citySchema = Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const City = model('Cities', citySchema)

export default City;