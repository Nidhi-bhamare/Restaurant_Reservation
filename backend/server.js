import express from 'express';
import connectDB from './database/dbConnection.js'; // Import the default export

const app = express();
const port = process.env.PORT || 5000;

connectDB(); // Establish DB connection

// Other server code here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
