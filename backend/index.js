import express from 'express'

import dotenv from 'dotenv'
import { userRouter } from './routes/userRoutes.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 3001

//app.get=> restful access,,   '/users-data'=>routers(endpoints),,, (req,res)=>controllers(callback functions)
// const mern = app.get('/users-data',userController)

const secondMiddleware = (req, res, next) => {
  console.log('inside second middleware')
  next()
}
const middleware = (req, res, next) => {
  console.log('inside middleware')
  next()
}

//Application level
// app.use(secondMiddleware)
// app.use(middleware)


//router-level middleware
// app.get('/data',middleware,(req,res)=>res.send('inside router level middleware'))

// app.get('/create',(req,res)=>res.send('inside without middleware'))
app.use(userRouter)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))