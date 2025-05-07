import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes/userRoutes.js';
import cors from 'cors'
import { productRouter } from './routes/productRoutes.js';

dotenv.config();


const app = express();
const MONGOURL = process.env.MONGOURL;

app.use(cors())
mongoose.connect(MONGOURL)
  .then(() => console.log('Database is connected'))
  .catch((err) => console.error('DB connection error:', err));

app.use(express.json());

app.use(router);
app.use(productRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running at ${PORT}`));