// // server.js
// const express = require('express');
// const uploadRoute = require('./routes/upload');
// const cors = require('cors');


import express from 'express'
import { router } from './routes/multerRoute.js';
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve images statically
app.use('/api', router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
