const { User } = require("../models/user.model")

const addToWishList = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;
    
      if (productId) {
          const data = await User.findById({ _id: userId });
         
          const productInWishlist = data.wishlist.some((product) => product === productId)
      try {
        if(!productInWishlist) {
          data.wishlist = data.wishlist.concat(productId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added to wishlist", 
          }) 
        } else {
          res.json({ 
          success: true, 
          message: "Already added to wishlist", 
          }) 
        }
      } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
        }
      }
}

const removeFromWishList = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;
      if (productId) {
          const data = await User.findById({ _id: userId });
        try {
          data.wishlist = data.wishlist.filter((item) => item !== productId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from Wishlist", 
          })    
        } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
        }
}

const moveToWishList = async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.body;

    if (productId) {
      const data = await User.findById({ _id: userId });

      const productInWishlist = data.wishlist.some((product) => product === productId)
    try {
      if(!productInWishlist) {
          data.cart = data.cart.filter((item) => item !== productId)
          data.wishlist = data.wishlist.concat(productId)
          const response = await data.save()

          res.json({ 
          success: true, 
          message: "Moved to Wishlist", 
          })     
      }  else {
          res.json({ 
          success: true, 
          message: "Already added to wishlist", 
          }) 
        }
      } catch (error) {
          res.status(500).json({ 
            success: false, 
            message: "Server error. Please try again." })
        }
        }
}


module.exports = { addToWishList, removeFromWishList, moveToWishList }