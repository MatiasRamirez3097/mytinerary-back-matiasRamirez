import Itinerary from "../Models/Itinerary.js"
import citiesController from "./citiesController.js";

const itinerariesController = {

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
    updateOne: async (req, res, next) => {
        const id = req.params.id
        let el;
        let success = true;
        let error = null;

        try {
            el = await Itinerary.findOneAndUpdate({ _id: id }, req.body)
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