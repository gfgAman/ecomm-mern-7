import { USERS } from "../models/userSchema.js"
import bcrypt from 'bcrypt'

export const postUserData = async (req, res) => {
    try {
        const { username, email, contact, password } = req.body

        if (!username || !email || !contact || !password)
            return res.status(401).json({ message: 'check all the details carefully!!!', status: 401 })

        const saltValue = 10
        const hashedPassword = await bcrypt.hash(password, saltValue)
        const user = new USERS({
            username,
            email,
            contact,
            password: hashedPassword
        })

        await user.save()
        return res.status(200).json({
            success: true, status: 200, message: 'user saved successfully!!!'
        })
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal server error', err })
    }
}

export const getUserData = async (req, res) => {

    const userData = await USERS.find()

    return res.status(200).json({ status: 200, userData })
}

export const findUser = async (req, res) => {
    const { email, password } = req.body

    const userData = await USERS.findOne({ email })

    //instead of using find(), we need to use findOne() because we already are searching the data as unique key i.e email
    if (!userData)
        return res.status(404).json({ message: 'user not found', status: 404 })

    const isPasswordMatching = await bcrypt.compare(password, userData.password)

    if (!isPasswordMatching)
        return res.status(401).json({ message: 'incorrect password', status: 401 })


    return res.status(200).json({ status: 200, userData })
}

export const updateUserData = async (req, res) => {
    const { email } = req.params
    const { contact, password } = req.body
    if (!contact || !password || !email)
        return res.status(401).json({ message: 'fill data', status: 401 })

    const userData = await USERS.findOneAndUpdate({ email }, { $set: { contact: contact, password: password } })

    // if (!userData)
    //     return res.status(404).json({ message: 'user not found', status: 404 })

    // userData.contact = contact
    // userData.password = password

    await userData.save()
    return res.status(200).json({ message: 'user data updated', status: 200 })
}

export const deleteUserData = async (req, res) => {
    const { email } = req.query
    await USERS.findOneAndDelete({ email })

    return res.status(200).json({ message: 'user deleted successfully', status: 200 })
}