const { User } = require("../models/user.model")

const addAddress = async (req, res) => {
        const { userId } = req.user;
        const { address } = req.body 
        if (userId) {
            try {
                console.log(userId)
                const user = await User.findById({ _id: userId })
                console.log(user)

                user.address = user.address.concat(address)

                await user.save()

                console.log('userdata is', user)
                res.status(200).json({ 
                  success: true, 
                  message: "Address added",
                  });
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

const getAddress = async (req, res) => {
        const { userId } = req.user;
          try {
              const { address } = await User.findById({ _id: userId })
              res.status(200).json({ 
                success: true, 
                message: "Address sent",
                address });
          } catch (error) {
              res.status(409).json({ 
                success: false, 
                message: "Server error. Please try again." })
          }
} 

const removeAddress = async (req, res) => {
        const { userId } = req.user;
        const { id } = req.body
        console.log(id)
          try {
              const user = await User.findById({ _id: userId })
              
              user.address = user.address.filter((address) => address._id !== id)

              await user.save()

              res.status(200).json({ 
                success: true, 
                message: "Address removed"});
          } catch (error) {
              res.status(409).json({ 
                success: false, 
                message: "Server error. Please try again." })
          }
} 

module.exports = { addAddress, getAddress, removeAddress }