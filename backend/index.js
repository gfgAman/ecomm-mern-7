import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes/userRoutes.js';

dotenv.config();

const app = express();
// const MONGOURL = process.env.MONGOURL;

// mongoose.connect(MONGOURL)
//   .then(() => console.log('Database is connected'))
//   .catch((err) => console.error('DB connection error:', err));

app.use(express.json());

// Define basic route before using router
// app.get('/home', (req, res) => {
//   res.send("hi");
// });

// Prefix router to avoid collisions
app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running at ${PORT}`));