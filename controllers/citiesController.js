import City from "../Models/City.js"

const citiesController = {

    createOneCity: async (req, res, next) => {
        let city;
        let success = true;
        let error = null;

        try {
            city = await City.create(req.body)
        }
        catch (err) {
            success = false;
            error = err;
        }
        res.json({
            response: city,
            success,
            error
        })
    },
    deleteOneCity: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let error = null;

        try {
            await City.findOneAndDelete({ _id: id })
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
    getOneCity: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let city;
        let error = null;

        try {
            city = await City.findById(id)
                .populate({
                    path: 'itineraries',
                    populate: ['hashtags', 'user']
                })
                .exec();
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: city,
            success,
            error
        })
    },
    getAllCities: async (req, res, next) => {
        const search = req.params.search ? { name: { $regex: "^" + req.params.search + ".*", $options: "i" } } : {}
        let success = true;
        let cities;
        let error = null;

        try {
            cities = await City.find(
                search
            );
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: cities,
            success,
            error
        })

    },
    updateOneCity: async (req, res, next) => {
        const id = req.params.id
        let city;
        let success = true;
        let error = null;

        try {
            city = await City.findOneAndUpdate({ _id: id }, req.body)
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: city,
            success,
            error
        })
    },
    addItinerary: async (id, itinerary) => {
        const el = await City.findByIdAndUpdate(id, {
            "$push": {
                "itineraries": itinerary
            }
        })
        return el
    },
    removeItineraryFromAllCities: async (itinerary) => {
        const el = await City.updateMany(
            {
                "itineraries": itinerary
            },
            {
                "$pull": {
                    "itineraries": itinerary
                }
            }
        )
        return el
    }
}

export default citiesController;