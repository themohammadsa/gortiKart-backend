const express = require('express');
const mongoose = require("mongoose")
const app = express();
var cors = require('cors')

const productsRouter = require("./Routes/products.route")
const { addToDatabase } = require("./Database/fakerDatabase.js")
const { databaseConnection } = require("./Database/databaseConnection.connect.js")
const PORT = 3000;

app.use(cors());


databaseConnection();

// addToDatabase();

app.use("/products", productsRouter);

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found on server, please check."})
})

app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});
