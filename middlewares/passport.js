import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import User from '../Models/User.js'
import 'dotenv/config.js'

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const fn = async (payload, next) => {
    try {
        const user = await User.findOne({ email: payload.email })
        if (!user) {
            throw new Error('No user exists with this email')
        }
        next(null, user)
    }
    catch (err) {
        next(err, null)
    }
}

export default passport.use(new Strategy(opt, fn))