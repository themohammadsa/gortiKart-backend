const { User } = require("../models/user.model")

const getUserData = async (req, res) => {
        const { userId } = req.user;
        if (userId) {
            try {
                console.log(userId)
                const { cart, wishlist } = await User.findById({ _id: userId })

                res.status(200).json({ 
                  success: true, 
                  message: "Data retrieval successful",
                  cart,
                  wishlist });
            } catch (error) {
                res.status(409).json({ 
                  success: false, 
                  message: "Server error. Please try again." })
            }
        } else {
            res.status(412).json({ 
              success: false, 
              message: "Data is missing" });
        }
}

    
module.exports = { getUserData }