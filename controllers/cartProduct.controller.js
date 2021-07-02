const { User } = require("../models/user.model")

const addToCart = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;
      if (productId) {
          const data = await User.findById({ _id: userId });
        try {
          data.cart = data.cart.concat(productId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added to cart", 
          })    
        } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
        }
}

const removeFromCart = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;
      if (productId) {
          const data = await User.findById({ _id: userId });
        try {
          data.cart = data.cart.filter((item) => item !== productId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from Cart", 
          })    
        } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
        }
}

const moveToCart = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;

    if (productId) {
      const data = await User.findById({ _id: userId });
      
    try {
      const productInCart = data.cart.some((product) => product === productId)
      
        if(productInCart) {
          data.wishlist = data.wishlist.filter((item) => item !== productId)
          const response = await data.save()

          res.json({ 
          success: true, 
          message: "Moved to Cart", 
          })     
        } else {
          data.wishlist = data.wishlist.filter((item) => item !== productId)
          data.cart = data.cart.concat(productId)

          const response = await data.save()

          res.json({ 
          success: true, 
          message: "Moved to Cart", 
          })    
        }
      } catch (error) {
          res.status(500).json({ 
            success: false, 
            message: "Server error. Please try again." })
        }
        }
}


module.exports = { addToCart, removeFromCart, moveToCart }