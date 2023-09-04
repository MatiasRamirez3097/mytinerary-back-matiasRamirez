import { model, Schema } from "mongoose"

const hashtagSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

const Hashtag = model('hashtags', hashtagSchema)

export default Hashtag;