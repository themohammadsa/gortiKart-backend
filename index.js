const express = require('express');
const mongoose = require("mongoose")
const app = express();
var cors = require('cors')
const bodyParser = require("body-parser");

const ProductsRouter = require("./routes/products.route")
const UserRouter = require("./routes/user.route")
const { addToDatabase } = require("./database/fakerDatabase.js")
const { databaseConnection } = require("./database/databaseConnection.connect.js")

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

databaseConnection();

// Initial function run to add the data to MongoDB
// addToDatabase();

app.use("/products", ProductsRouter);
app.use("/user", UserRouter);

app.get('/', (req, res) => {
  res.send('Please visit "https://gortikart.netlify.app/" to view the application. ')
});

app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});
