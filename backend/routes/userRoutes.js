import express from 'express'
import { deleteUserData, findUser, getUserData, postUserData, updateUserData } from '../controller/userContoller.js'

export const router = express.Router()

router.post('/post', postUserData)
router.get('/get', getUserData)
router.put('/update/:email', updateUserData)
router.delete('/delete', deleteUserData)
router.post('/login', findUser)