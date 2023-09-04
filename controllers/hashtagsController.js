import Hashtag from "../Models/Hashtag.js"

const hashtagController = {

    createOne: async (req, res, next) => {
        let el;
        let success = true;
        let error = null;

        try {
            el = await Hashtag.create(req.body)
        }
        catch (err) {
            success = false;
            error = err;
        }
        res.json({
            response: el,
            success,
            error
        })
    },
    deleteOne: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let error = null;

        try {
            await Hashtag.findOneAndDelete({ _id: id })
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
            el = await Hashtag.findById(id).exec();
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
        const search = req.params.search ? { name: { $regex: "^" + req.params.search + ".*", $options: "i" } } : {}
        let success = true;
        let els;
        let error = null;

        try {
            els = await Hashtag.find(
                search
            );
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
            el = await Hashtag.findOneAndUpdate({ _id: id }, req.body)
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

export default hashtagController;