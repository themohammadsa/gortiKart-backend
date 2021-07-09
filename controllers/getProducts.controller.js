const { Product } = require("../models/product.model")

const getProducts = async (req, res) => {
    try {
      console.log("getting products..")
        const products = await Product.find({});
        res.json({success: true, products});
      } catch (err) {
        res.status(500).json({  
          success: false, error: "Unable to get Products from server!"
        })
      }  
}

module.exports = { getProducts }