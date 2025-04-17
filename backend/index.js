import express from 'express'

import dotenv from  'dotenv'
import { userRouter } from './routes/userRoutes.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT||3001

  //app.get=> restful access,,   '/users-data'=>routers(endpoints),,, (req,res)=>controllers(callback functions)
// const mern = app.get('/users-data',userController)

app.use(userRouter)

app.listen(PORT,()=>console.log(`server is running at ${PORT}`))