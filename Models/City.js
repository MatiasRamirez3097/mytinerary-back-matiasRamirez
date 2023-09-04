import { model, Schema, Types } from "mongoose"

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
    },
    itineraries: [
        {
            type: Types.ObjectId,
            ref: 'itineraries'
        }
    ]
}, {
    timestamps: true
})

const City = model('cities', citySchema)

export default City;