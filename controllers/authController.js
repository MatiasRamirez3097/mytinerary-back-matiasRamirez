import User from '../Models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const authController = {
    signIn: async (req, res, next) => {
        try {
            const { email: emailBody, password } = req.body
            const user = await User.findOne({ email: emailBody })
            if (!user) throw new Error('No user exists with this email')

            const passValidated = bcrypt.compareSync(password, user.password)
            if (!passValidated) throw new Error('The email/password is incorrect')

            const { email, name, photo } = user

            const token = jwt.sign({ email, photo }, process.env.SECRET_KEY)

            return res.status(200).json({
                success: true,
                token: token,
                user: { email, name, photo },
                message: 'Sign in succesfully'
            })
        } catch (err) {
            return res.status(400).json({
                response: err.name,
                success: false,
                error: err.message,
                code: 'NO_USER_EXISTS'
            })
        }
    },
    signUp: async (req, res, next) => {

        let user;
        let token;

        try {
            const hashPassword = bcrypt.hashSync(req.body.password)
            req.body.password = hashPassword
            user = await User.create(req.body)
            console.log(user)
            const { email, photo } = user
            token = jwt.sign({ email, photo }, process.env.SECRET_KEY)
            return res.status(200).json({
                success: true,
                token: token,
                user: { email, name, photo },
                message: 'Sign in succesfully'
            })
        }
        catch (err) {
            return res.status(400).json({
                response: err.name,
                success: false,
                error: err.message,
                code: 'USER_EXISTS'
            })
        }
    },
    loginWithToken: (req, res) => {
        const { email, name, photo } = req.user

        res.json({
            success: true,
            user: { email, name, photo },
            message: 'Sign in successfully'
        })
    }
}

export default authController