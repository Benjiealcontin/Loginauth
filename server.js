require ('dotenv').config({path: "./config.env"});
const express = require('express');
const ConnectDB = require('./config/db')

const app = express();

// Connect to Database
ConnectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));




const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});