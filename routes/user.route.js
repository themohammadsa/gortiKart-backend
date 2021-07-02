var express = require('express');
const router = express.Router();
const { User } = require("../models/user.model")
const { authHandler } = require("../middlewares/auth.middleware.js")
const { signUp } = require("../controllers/signUp.controller")
const { login } = require("../controllers/login.controller")
const { getUserData } = require("../controllers/getUserData.controller")
const { addToCart, removeFromCart, moveToCart } = require("../controllers/cartProduct.controller")
const { addToWishList, removeFromWishList, moveToWishList } = require("../controllers/wishlistProduct.controller")

router.route("/signup")
  .post(signUp)

router.route("/login")
  .post(login)

router.route("/")
  .get(authHandler, getUserData)

router.route("/cart/add")
  .post(authHandler, addToCart)

router.route("/cart/remove")
  .post(authHandler, removeFromCart)

router.route("/cart/move")
  .post(authHandler, moveToCart)

router.route("/wishlist/add")
  .post(authHandler, addToWishList)

router.route("/wishlist/remove")
  .post(authHandler, removeFromWishList)

router.route("/wishlist/move")
  .post(authHandler, moveToWishList)

module.exports = router;
