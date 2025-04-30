import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { router } from './routes/userRoutes.js'

dotenv.config()

const app = express()
const MONGOURL = process.env.MONGOURL

try {
  mongoose.connect(MONGOURL)
  console.log('Database is connected');
}
catch (err) {
  console.log(err);
}

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server is running at ${PORT}`))