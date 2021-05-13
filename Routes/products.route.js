const express = require("express");
const { Product } = require("../Models/product.model.js");
const router = express.Router();

router.route("/products")
.get(async (req, res) => {
  try {
    const products = await Product.find();
    res.json({success: true, products});
  } catch (err) {
    res.status(500).json({  
      success: false, error: "Unable to get Products from server!"
    })
  }  
})

// router.route("/products/:id")
// .get(async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.json(product);
//   } catch (err) {
//       res.status(500).json({  
//       success: false, error: "Unable to get Products from server!"
//     })
//   }
// });

module.exports = router;
