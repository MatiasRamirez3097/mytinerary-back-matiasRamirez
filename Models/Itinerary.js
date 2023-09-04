import { model, Schema, Types } from "mongoose"

const itinerarySchema = Schema({
    duration: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    hashtags: [
        {
            type: Types.ObjectId,
            ref: 'hashtags'
        }
    ],
    user: {
        type: Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema)

export default Itinerary;