import express from "express";

const router = express.Router();

console.log("routes are working");

import userSignUpController from "../controller/userSignUp.js";
import userSignInController from "../controller/userSignIn.js";
import userDetailsController from "../controller/userDetails.js";
import authToken from "../middleware/authToken.js";
import userLogout from "../controller/userLogout.js";
import allUsers from "../controller/AdminPanel/allUsers.js";
import updateUser from "../controller/AdminPanel/updateUser.js";
import UploadProductController from "../controller/AdminPanel/uploadProduct.js";
import getProductController from "../controller/AdminPanel/getProduct.js";
import updateProductController from "../controller/AdminPanel/updateProduct.js";

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/logout", userLogout);
router.get("/user-details", authToken, userDetailsController);

// ADMIN PANEL
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

// PRODUCT
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);

export default router;
