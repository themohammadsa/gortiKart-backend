const faker = require("faker");
const mongoose = require("mongoose")
const Product = require("../models/product.model")
const { tabletImages, laptopImages, desktopImages, accessoriesImages } = require("./images")

faker.seed(3);

  const Tablets = [...Array(15)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.arrayElement(tabletImages),
  price: faker.commerce.price(),
  fastDelivery: faker.random.boolean(),
  inStock: faker.random.boolean(),
  offer: faker.random.arrayElement([10, 15, 20, 25, 30, 35]),
  starRating: faker.random.arrayElement([2, 3, 4, 5]),
  totalReviews: faker.random.arrayElement([135, 112, 22520, 2535, 10123, 5163, 521]),
  categories: "Tablets"
  }))

  const Laptops = [...Array(15)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.arrayElement(laptopImages),
  price: faker.commerce.price(),
  fastDelivery: faker.random.boolean(),
  inStock: faker.random.boolean(),
  offer: faker.random.arrayElement([10, 15, 20, 25, 30, 35]),
  starRating: faker.random.arrayElement([2, 3, 4, 5]),
  totalReviews: faker.random.arrayElement([105, 1125, 2270, 2355, 10123, 5163, 521]),
  categories: "Laptops"
  }))

  const Desktops = [...Array(15)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.arrayElement(desktopImages),
  price: faker.commerce.price(),
  fastDelivery: faker.random.boolean(),
  inStock: faker.random.boolean(),
  offer: faker.random.arrayElement([10, 15, 20, 25, 30, 35]),
  starRating: faker.random.arrayElement([2, 3, 4, 5]),
  totalReviews: faker.random.arrayElement([1535, 115, 2350, 2555, 10123, 5163, 521]),
  categories: "Desktops"
  }))

  const Accessories = [...Array(15)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.arrayElement(accessoriesImages),
  price: faker.commerce.price(),
  fastDelivery: faker.random.boolean(),
  inStock: faker.random.boolean(),
  offer: faker.random.arrayElement([10, 15, 20, 25, 30, 35]),
  starRating: faker.random.arrayElement([2, 3, 4, 5]),
  totalReviews: faker.random.arrayElement([10245, 11145, 1450, 455, 10123, 5163, 521]),
  categories: "Accessories"
  }))

function addToDatabase() {
    Tablets.map((product) => {  
      const NewProduct = new Product(product);
      const savedProduct = NewProduct.save();
    })
     Laptops.map((product) => {  
      const NewProduct = new Product(product);
      const savedProduct = NewProduct.save();
    })
     Desktops.map((product) => {  
      const NewProduct = new Product(product);
      const savedProduct = NewProduct.save();
    })
     Accessories.map((product) => {  
      const NewProduct = new Product(product);
      const savedProduct = NewProduct.save();
    })
}

module.exports = { addToDatabase }

