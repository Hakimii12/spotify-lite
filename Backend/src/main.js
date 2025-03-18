import express from 'express';
import dotenv from 'dotenv';
import Data from './Database/data.js';
import path from 'path';
import Cloudinary from './Database/cloudinary.js';
// Load .env file from the current directory
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use PORT from environment variables or fallback to 3000
const port = process.env.PORT || 3000;
console.log('PORT:', port); // Debugging: Check if PORT is loaded

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// Initiating a database connection
Data();
// Initaiating a cloudinary connection 
Cloudinary()