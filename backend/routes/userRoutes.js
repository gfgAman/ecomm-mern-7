import express from 'express'
import { deleteUserData, findUser, getUserData, postUserData, updateUserData } from '../controller/userContoller.js'

export const router = express.Router()

router.post('/signup', postUserData)
router.get('/getuser', getUserData)
router.put('/update/:email', updateUserData)
router.delete('/delete', deleteUserData)
router.post('/login', findUser)