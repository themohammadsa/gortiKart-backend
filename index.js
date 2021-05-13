const express = require('express');
const mongoose = require("mongoose")
const app = express();
var cors = require('cors')

const productsRouter = require("./Routes/products.route")
const { addToDatabase } = require("./Database/fakerDatabase.js")
const { databaseConnection } = require("./Database/databaseConnection.connect.js")
const PORT = 3000;

const corsOptions = {
  origin: "https://gortikart.netlify.app"
}

databaseConnection();

// Initial function run to add the data to MongoDB
// addToDatabase();

app.use("/", cors(corsOptions), productsRouter);


app.get('/', (req, res) => {
  res.send('Please visit "https://gortikart.netlify.app/" to view the application. ')
});


app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});
