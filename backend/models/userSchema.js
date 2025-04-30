import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requred: true,
        index: true,
        unique: true
    },
    contact: {
        type: Number,
        index: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export const USERS = mongoose.model('USERS', userSchema)