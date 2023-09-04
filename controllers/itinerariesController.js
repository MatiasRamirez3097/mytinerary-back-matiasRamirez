import Itinerary from "../Models/Itinerary.js"
import citiesController from "./citiesController.js";

const itinerariesController = {
    addHashtags: async (id, hashtags) => {
        const res = await Itinerary.findByIdAndUpdate(id,
            {
                $addToSet: {
                    hashtags: {
                        $each: hashtags
                    }
                }
            })
        return res
    },

    createOne: async (req, res, next) => {

        let el;
        let add;
        let success = true;
        let error = null;

        if (req.body.city) {
            try {

                el = await Itinerary.create(req.body)
                add = await citiesController.addItinerary(req.body.city, el)

            }
            catch (err) {
                success = false;
                error = err;
                console.log(err)
            }
        }
        else {
            success = false;
            error = "Missing city"
        }

        res.json({
            response: {
                el,
                add
            },
            success,
            error
        })
    },
    deleteOne: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let error = null;

        try {
            await Itinerary.findOneAndDelete({ _id: id })
            await citiesController.removeItineraryFromAllCities(id)
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: "deleted",
            success,
            error
        })
    },
    getOne: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let el;
        let error = null;

        try {
            el = await Itinerary.findById(id).exec();
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: el,
            success,
            error
        })
    },
    getAll: async (req, res, next) => {
        let success = true;
        let els;
        let error = null;

        try {
            els = await Itinerary.find()
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: els,
            success,
            error
        })

    },

    removeHashtags: async (id, hashtags) => {
        const res = await Itinerary.findByIdAndUpdate(id,
            {
                $pullAll: {
                    hashtags: hashtags
                }
            })
        return res
    },

    updateOne: async (req, res, next) => {
        const id = req.params.id
        let el;
        let success = true;
        let error = null;

        try {
            el = await Itinerary.findOneAndUpdate({ _id: id }, req.body)
            if (req.body.addHashtags) await itinerariesController.addHashtags(id, req.body.addHashtags)
            if (req.body.removeHashtags) await itinerariesController.removeHashtags(id, req.body.removeHashtags)
            if (req.body.city) {
                await citiesController.removeItineraryFromAllCities(id)
                await citiesController.addItinerary(req.body.city, id)
            }
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: el,
            success,
            error
        })
    }
}

export default itinerariesController;