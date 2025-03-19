import express from 'express';
import dotenv from 'dotenv';
import Data from './Database/data.js';
import path from 'path';
import cloudinary from './Database/cloudinary.js';
import SongModel from './models/songModel.js';
import AlbumModel from './models/albumModel.js';
import Routes from './routes/route.js';
import cors from 'cors'
// Load .env file from the current directory
dotenv.config();

const app = express();
app.use(express.json());
// initating cors
app.use(cors());
// runnnig Routes
app.use('/api', Routes)
// Use PORT from environment variables or fallback to 3000
const port = process.env.PORT || 3000;
console.log('PORT:', port); // Debugging: Check if PORT is loaded

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// Initiating a database connection
Data();
